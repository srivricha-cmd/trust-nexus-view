import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EscalationLevel } from '@/types/portal';
import { toast } from 'sonner';
import { AlertTriangle } from 'lucide-react';

const linkedToOptions = ['Order', 'Ticket', 'Academic'] as const;
const escalationLevels: EscalationLevel[] = ['Project Coordinator', 'Operations Head', 'Managing Director'];

export const EscalationForm = () => {
  const [formData, setFormData] = useState({
    linkedTo: '' as typeof linkedToOptions[number],
    reason: '',
    escalationLevel: '' as EscalationLevel,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.linkedTo || !formData.reason || !formData.escalationLevel) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success(`Escalation raised to ${formData.escalationLevel}! Email & WhatsApp notifications sent.`);
    
    setFormData({
      linkedTo: '' as typeof linkedToOptions[number],
      reason: '',
      escalationLevel: '' as EscalationLevel,
    });
  };

  return (
    <div className="form-section animate-fade-in border-destructive/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-destructive" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Raise Escalation</h3>
          <p className="text-sm text-muted-foreground">Escalate delayed or critical issues</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="linkedTo">Linked To</Label>
            <Select 
              value={formData.linkedTo} 
              onValueChange={(value: typeof linkedToOptions[number]) => setFormData({ ...formData, linkedTo: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {linkedToOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="escalationLevel">Escalate To</Label>
            <Select 
              value={formData.escalationLevel} 
              onValueChange={(value: EscalationLevel) => setFormData({ ...formData, escalationLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {escalationLevels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Escalation</Label>
          <Textarea
            id="reason"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            placeholder="Describe why this needs to be escalated"
            rows={3}
          />
        </div>

        <Button type="submit" variant="destructive" className="w-full">
          Raise Escalation
        </Button>
      </form>
    </div>
  );
};
