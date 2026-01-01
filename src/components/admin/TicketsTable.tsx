import { Ticket } from '@/types/portal';
import { StatusBadge } from '@/components/common/StatusBadge';
import { UrgencyBadge } from '@/components/common/UrgencyBadge';
import { Clock } from 'lucide-react';

interface TicketsTableProps {
  tickets: Ticket[];
}

export const TicketsTable = ({ tickets }: TicketsTableProps) => {
  const isOverdue = (slaDeadline: string) => {
    return new Date(slaDeadline) < new Date();
  };

  return (
    <div className="overflow-x-auto animate-fade-in">
      <table className="data-table">
        <thead>
          <tr>
            <th>Raised To</th>
            <th>Task Description</th>
            <th>Plan Date</th>
            <th>Urgency</th>
            <th>SLA</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-8 text-muted-foreground">
                No tickets found
              </td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="font-medium">{ticket.raisedTo}</td>
                <td className="max-w-xs truncate">{ticket.taskDescription}</td>
                <td>{new Date(ticket.planDate).toLocaleDateString('en-IN')}</td>
                <td><UrgencyBadge urgency={ticket.urgency} /></td>
                <td>
                  <div className="flex items-center gap-1">
                    <Clock className={`w-4 h-4 ${isOverdue(ticket.slaDeadline) ? 'text-destructive' : 'text-muted-foreground'}`} />
                    <span className={isOverdue(ticket.slaDeadline) ? 'text-destructive font-medium' : ''}>
                      {new Date(ticket.slaDeadline).toLocaleDateString('en-IN')}
                    </span>
                    {isOverdue(ticket.slaDeadline) && ticket.status !== 'Complete' && (
                      <span className="text-xs text-destructive ml-1">(Overdue)</span>
                    )}
                  </div>
                </td>
                <td><StatusBadge status={ticket.status} /></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
