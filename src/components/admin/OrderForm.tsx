import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OrderCategory, Urgency } from '@/types/portal';
import { toast } from 'sonner';
import { PackagePlus } from 'lucide-react';

const categories: OrderCategory[] = ['Stationery', 'Teaching Material', 'Infrastructure', 'Travel', 'Other'];
const urgencyLevels: Urgency[] = ['Low', 'Medium', 'High'];

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    requesterName: '',
    category: '' as OrderCategory,
    purpose: '',
    requiredByDate: '',
    urgency: '' as Urgency,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.requesterName || !formData.category || !formData.purpose || !formData.requiredByDate || !formData.urgency) {
      toast.error('Please fill all required fields');
      return;
    }

    // Simulate submission
    toast.success('Order submitted successfully! Operations Lead will be notified for approval.');
    
    setFormData({
      requesterName: '',
      category: '' as OrderCategory,
      purpose: '',
      requiredByDate: '',
      urgency: '' as Urgency,
    });
  };

  return (
    <div className="form-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <PackagePlus className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Order / Requirement Raise</h3>
          <p className="text-sm text-muted-foreground">Samaan / Kaam ki Request</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="requesterName">Requester Name / Naam</Label>
            <Input
              id="requesterName"
              value={formData.requesterName}
              onChange={(e) => setFormData({ ...formData, requesterName: e.target.value })}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category / Vibhag</Label>
            <Select 
              value={formData.category} 
              onValueChange={(value: OrderCategory) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purpose">Purpose / Uddeshya</Label>
          <Textarea
            id="purpose"
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            placeholder="Describe what is needed and why"
            rows={3}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="requiredByDate">Required By Date / Kab Tak Chahiye</Label>
            <Input
              id="requiredByDate"
              type="date"
              value={formData.requiredByDate}
              onChange={(e) => setFormData({ ...formData, requiredByDate: e.target.value })}
            />
          </div>

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
          </div>
        </div>

        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          Submit Order / Order Bhejein
        </Button>
      </form>
    </div>
  );
};
