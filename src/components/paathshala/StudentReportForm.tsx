import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
import { teachers } from '@/data/mockData';

export const StudentReportForm = () => {
  const [formData, setFormData] = useState({
    teacherName: '',
    reportType: '' as 'Weekly' | 'Monthly',
    periodStart: '',
    periodEnd: '',
    totalStudentsOnboarded: '',
    studentsLeft: '',
    topicsCovered: '',
    issuesFaced: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.teacherName || !formData.reportType || !formData.periodStart || !formData.periodEnd) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success('Report submitted successfully!');
    
    setFormData({
      teacherName: '',
      reportType: '' as 'Weekly' | 'Monthly',
      periodStart: '',
      periodEnd: '',
      totalStudentsOnboarded: '',
      studentsLeft: '',
      topicsCovered: '',
      issuesFaced: '',
    });
  };

  return (
    <div className="form-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-info" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Weekly / Monthly Report</h3>
          <p className="text-sm text-muted-foreground">Student progress report</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
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

          <div className="space-y-2">
            <Label htmlFor="reportType">Report Type</Label>
            <Select 
              value={formData.reportType} 
              onValueChange={(value: 'Weekly' | 'Monthly') => setFormData({ ...formData, reportType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="periodStart">Period Start</Label>
            <Input
              id="periodStart"
              type="date"
              value={formData.periodStart}
              onChange={(e) => setFormData({ ...formData, periodStart: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="periodEnd">Period End</Label>
            <Input
              id="periodEnd"
              type="date"
              value={formData.periodEnd}
              onChange={(e) => setFormData({ ...formData, periodEnd: e.target.value })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="totalStudentsOnboarded">Total Students Onboarded</Label>
            <Input
              id="totalStudentsOnboarded"
              type="number"
              min="0"
              value={formData.totalStudentsOnboarded}
              onChange={(e) => setFormData({ ...formData, totalStudentsOnboarded: e.target.value })}
              placeholder="Enter number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentsLeft">Students Left (Dropouts)</Label>
            <Input
              id="studentsLeft"
              type="number"
              min="0"
              value={formData.studentsLeft}
              onChange={(e) => setFormData({ ...formData, studentsLeft: e.target.value })}
              placeholder="Enter number"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topicsCovered">Topics Covered</Label>
          <Textarea
            id="topicsCovered"
            value={formData.topicsCovered}
            onChange={(e) => setFormData({ ...formData, topicsCovered: e.target.value })}
            placeholder="List the topics covered during this period"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="issuesFaced">Issues Faced</Label>
          <Textarea
            id="issuesFaced"
            value={formData.issuesFaced}
            onChange={(e) => setFormData({ ...formData, issuesFaced: e.target.value })}
            placeholder="Describe any challenges or issues faced"
            rows={2}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Report
        </Button>
      </form>
    </div>
  );
};
