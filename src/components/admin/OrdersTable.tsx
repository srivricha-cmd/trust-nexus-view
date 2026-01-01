import { Order } from '@/types/portal';
import { StatusBadge } from '@/components/common/StatusBadge';
import { UrgencyBadge } from '@/components/common/UrgencyBadge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

interface OrdersTableProps {
  orders: Order[];
  showActions?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export const OrdersTable = ({ orders, showActions = false, onApprove, onReject }: OrdersTableProps) => {
  return (
    <div className="overflow-x-auto animate-fade-in">
      <table className="data-table">
        <thead>
          <tr>
            <th>Requester</th>
            <th>Category</th>
            <th>Purpose</th>
            <th>Required By</th>
            <th>Urgency</th>
            <th>Status</th>
            {showActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={showActions ? 7 : 6} className="text-center py-8 text-muted-foreground">
                No orders found
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="font-medium">{order.requesterName}</td>
                <td>{order.category}</td>
                <td className="max-w-xs truncate">{order.purpose}</td>
                <td>{new Date(order.requiredByDate).toLocaleDateString('en-IN')}</td>
                <td><UrgencyBadge urgency={order.urgency} /></td>
                <td><StatusBadge status={order.status} /></td>
                {showActions && order.status === 'Pending' && (
                  <td>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-success border-success hover:bg-success/10"
                        onClick={() => onApprove?.(order.id)}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                        onClick={() => onReject?.(order.id)}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </td>
                )}
                {showActions && order.status !== 'Pending' && (
                  <td className="text-muted-foreground text-sm">-</td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
