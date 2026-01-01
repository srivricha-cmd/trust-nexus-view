import { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { PortalHeader } from '@/components/layout/PortalHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OrderForm } from '@/components/admin/OrderForm';
import { OrdersTable } from '@/components/admin/OrdersTable';
import { TicketForm } from '@/components/admin/TicketForm';
import { TicketsTable } from '@/components/admin/TicketsTable';
import { ResponsibilitiesModule } from '@/components/admin/ResponsibilitiesModule';
import { mockOrders, mockTickets } from '@/data/mockData';
import { toast } from 'sonner';

const AdminPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState('orders');

  const handleApprove = (id: string) => {
    setOrders(orders.map(o => 
      o.id === id ? { ...o, status: 'Approved' as const, approvedAt: new Date().toISOString() } : o
    ));
    toast.success('Order approved! WhatsApp notification sent to Admin.');
  };

  const handleReject = (id: string) => {
    setOrders(orders.map(o => 
      o.id === id ? { ...o, status: 'Rejected' as const } : o
    ));
    toast.info('Order rejected.');
  };

  return (
    <PortalLayout>
      <PortalHeader 
        title="Admin Panel" 
        subtitle="Order Management & Ticketing System (Admin & Ops Team)"
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1 h-auto">
          <TabsTrigger value="orders" className="py-3">
            Orders / Requests
            <span className="hidden sm:inline"> (Samaan)</span>
          </TabsTrigger>
          <TabsTrigger value="tickets" className="py-3">
            Ticketing
            <span className="hidden sm:inline"> (Shikayat)</span>
          </TabsTrigger>
          <TabsTrigger value="responsibilities" className="py-3">
            Responsibilities
            <span className="hidden sm:inline"> (Zimmedari)</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          <OrderForm />
          
          <div className="module-card">
            <h3 className="font-heading font-semibold text-lg mb-4">All Orders / Sabhi Orders</h3>
            <OrdersTable 
              orders={orders} 
              showActions 
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <TicketForm />
          
          <div className="module-card">
            <h3 className="font-heading font-semibold text-lg mb-4">All Tickets / Sabhi Tickets</h3>
            <TicketsTable tickets={mockTickets} />
          </div>
        </TabsContent>

        <TabsContent value="responsibilities">
          <ResponsibilitiesModule />
        </TabsContent>
      </Tabs>
    </PortalLayout>
  );
};

export default AdminPage;
