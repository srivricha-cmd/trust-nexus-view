import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Urgency } from '@/types/portal';
import { toast } from 'sonner';
import { Ticket } from 'lucide-react';

const raisedToOptions = ['IT Support', 'Maintenance', 'Admin', 'Management', 'Operations'];
const urgencyLevels: Urgency[] = ['Low', 'Medium', 'High'];

export const TicketForm = () => {
  const [formData, setFormData] = useState({
    raisedTo: '',
    taskDescription: '',
    planDate: '',
    urgency: '' as Urgency,
    file: null as File | null,
  });

  const getSLAText = (urgency: Urgency): string => {
    switch (urgency) {
      case 'High': return 'SLA: 24 hours';
      case 'Medium': return 'SLA: 2 days';
      case 'Low': return 'SLA: 3 days';
      default: return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.raisedTo || !formData.taskDescription || !formData.planDate || !formData.urgency) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success('Ticket raised successfully! Admin will receive WhatsApp alert.');
    
    setFormData({
      raisedTo: '',
      taskDescription: '',
      planDate: '',
      urgency: '' as Urgency,
      file: null,
    });
  };

  return (
    <div className="form-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
          <Ticket className="w-5 h-5 text-info" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Raise Ticket</h3>
          <p className="text-sm text-muted-foreground">Shikayat / Kaam ka Ticket</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="raisedTo">Raised To / Kisko Bheja</Label>
            <Select 
              value={formData.raisedTo} 
              onValueChange={(value) => setFormData({ ...formData, raisedTo: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {raisedToOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="planDate">Plan Date / Kab Tak Karna Hai</Label>
            <Input
              id="planDate"
              type="date"
              value={formData.planDate}
              onChange={(e) => setFormData({ ...formData, planDate: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="taskDescription">Task / Description</Label>
          <Textarea
            id="taskDescription"
            value={formData.taskDescription}
            onChange={(e) => setFormData({ ...formData, taskDescription: e.target.value })}
            placeholder="Describe the issue or task in detail"
            rows={3}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency / Zaroorat</Label>
            <Select 
              value={formData.urgency} 
              onValueChange={(value: Urgency) => setFormData({ ...formData, urgency: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                {urgencyLevels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.urgency && (
              <p className="text-xs text-info font-medium">{getSLAText(formData.urgency)}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Attach File (Optional)</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
              className="cursor-pointer"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Raise Ticket / Ticket Bhejein
        </Button>
      </form>
    </div>
  );
};
