import { cn } from '@/lib/utils';
import { Urgency } from '@/types/portal';

interface UrgencyBadgeProps {
  urgency: Urgency;
}

const urgencyStyles: Record<Urgency, string> = {
  Low: 'urgency-low',
  Medium: 'urgency-medium',
  High: 'urgency-high',
};

export const UrgencyBadge = ({ urgency }: UrgencyBadgeProps) => {
  return (
    <span className={cn('status-badge', urgencyStyles[urgency])}>
      {urgency}
    </span>
  );
};
