import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar } from 'lucide-react';
import { teachers } from '@/data/mockData';

export const LeaveForm = () => {
  const [formData, setFormData] = useState({
    teacherName: '',
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.teacherName || !formData.fromDate || !formData.toDate || !formData.reason) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success('Leave application submitted! Awaiting admin approval.');
    
    setFormData({
      teacherName: '',
      fromDate: '',
      toDate: '',
      reason: '',
    });
  };

  return (
    <div className="form-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Leave Application</h3>
          <p className="text-sm text-muted-foreground">Apply for time off</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="teacherName">Teacher Name</Label>
          <Select 
            value={formData.teacherName} 
            onValueChange={(value) => setFormData({ ...formData, teacherName: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your name" />
            </SelectTrigger>
            <SelectContent>
              {teachers.map((teacher) => (
                <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fromDate">From Date</Label>
            <Input
              id="fromDate"
              type="date"
              value={formData.fromDate}
              onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="toDate">To Date</Label>
            <Input
              id="toDate"
              type="date"
              value={formData.toDate}
              onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Leave</Label>
          <Textarea
            id="reason"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            placeholder="Please provide the reason for your leave"
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          Submit Application
        </Button>
      </form>
    </div>
  );
};
