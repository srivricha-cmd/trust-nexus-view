import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Users, Camera } from 'lucide-react';
import { classes } from '@/data/mockData';

export const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    className: '',
    totalPresent: '',
    totalAbsent: '',
    attendancePhoto: null as File | null,
    studentPhoto: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.className || !formData.totalPresent || !formData.totalAbsent || !formData.attendancePhoto) {
      toast.error('Please fill all required fields and upload attendance sheet photo');
      return;
    }

    toast.success('Attendance recorded successfully!');
    
    setFormData({
      date: '',
      className: '',
      totalPresent: '',
      totalAbsent: '',
      attendancePhoto: null,
      studentPhoto: null,
    });
  };

  return (
    <div className="form-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-success" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Student Attendance</h3>
          <p className="text-sm text-muted-foreground">Daily attendance capture</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="className">Class</Label>
            <Select 
              value={formData.className} 
              onValueChange={(value) => setFormData({ ...formData, className: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="totalPresent">Total Present</Label>
            <Input
              id="totalPresent"
              type="number"
              min="0"
              value={formData.totalPresent}
              onChange={(e) => setFormData({ ...formData, totalPresent: e.target.value })}
              placeholder="Enter number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalAbsent">Total Absent</Label>
            <Input
              id="totalAbsent"
              type="number"
              min="0"
              value={formData.totalAbsent}
              onChange={(e) => setFormData({ ...formData, totalAbsent: e.target.value })}
              placeholder="Enter number"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="attendancePhoto" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Attendance Sheet Photo (Required)
            </Label>
            <Input
              id="attendancePhoto"
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, attendancePhoto: e.target.files?.[0] || null })}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentPhoto" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Student Photo (Optional)
            </Label>
            <Input
              id="studentPhoto"
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, studentPhoto: e.target.files?.[0] || null })}
              className="cursor-pointer"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Record Attendance
        </Button>
      </form>
    </div>
  );
};
