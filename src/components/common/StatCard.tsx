import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  iconBgClass?: string;
}

export const StatCard = ({ title, value, icon: Icon, trend, trendUp, iconBgClass = 'bg-primary/10' }: StatCardProps) => {
  return (
    <div className="widget-card card-hover animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <p className="widget-label">{title}</p>
          <p className="widget-value mt-2">{value}</p>
          {trend && (
            <p className={cn(
              'text-sm mt-2 font-medium',
              trendUp ? 'text-success' : 'text-destructive'
            )}>
              {trend}
            </p>
          )}
        </div>
        <div className={cn('widget-icon', iconBgClass)}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};
