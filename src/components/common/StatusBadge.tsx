import { cn } from '@/lib/utils';

type StatusType = 'Pending' | 'Approved' | 'Completed' | 'Closed' | 'Rejected' | 'Open' | 'In Progress' | 'Complete' | 'Active' | 'On Hold' | 'Raised' | 'Acknowledged' | 'Resolved';

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  Pending: 'status-pending',
  Approved: 'status-approved',
  Completed: 'status-completed',
  Complete: 'status-completed',
  Closed: 'status-closed',
  Rejected: 'status-rejected',
  Open: 'status-pending',
  'In Progress': 'status-approved',
  Active: 'status-approved',
  'On Hold': 'status-pending',
  Raised: 'status-pending',
  Acknowledged: 'status-approved',
  Resolved: 'status-completed',
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span className={cn('status-badge', statusStyles[status])}>
      {status}
    </span>
  );
};
