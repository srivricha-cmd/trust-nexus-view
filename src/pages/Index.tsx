import { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { PortalHeader } from '@/components/layout/PortalHeader';
import { DashboardWidgets } from '@/components/dashboard/DashboardWidgets';
import { EscalationForm } from '@/components/dashboard/EscalationForm';
import { OrdersTable } from '@/components/admin/OrdersTable';
import { TicketsTable } from '@/components/admin/TicketsTable';
import { SyllabusTracker } from '@/components/paathshala/SyllabusTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockOrders, mockTickets, mockLeaveRequests, mockEscalations } from '@/data/mockData';
import { StatusBadge } from '@/components/common/StatusBadge';
import { toast } from 'sonner';

const Index = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState('overview');

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
        title="BO TRUST Dashboard" 
        subtitle="Management View - Complete Trust Operations Overview"
      />

      <div className="space-y-6">
        <DashboardWidgets />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-muted/50 p-1 h-auto">
            <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
            <TabsTrigger value="orders" className="py-3">Orders</TabsTrigger>
            <TabsTrigger value="tickets" className="py-3">Tickets</TabsTrigger>
            <TabsTrigger value="academics" className="py-3">Academics</TabsTrigger>
            <TabsTrigger value="escalations" className="py-3">Escalations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <OrdersTable 
                    orders={orders.slice(0, 3)} 
                    showActions 
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Open Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <TicketsTable tickets={mockTickets} />
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Pending Leave Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockLeaveRequests.filter(l => l.status === 'Pending').map((leave) => (
                      <div key={leave.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{leave.teacherName}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(leave.fromDate).toLocaleDateString('en-IN')} - {new Date(leave.toDate).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <StatusBadge status={leave.status} />
                      </div>
                    ))}
                    {mockLeaveRequests.filter(l => l.status === 'Pending').length === 0 && (
                      <p className="text-muted-foreground text-center py-4">No pending requests</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Active Escalations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockEscalations.map((esc) => (
                      <div key={esc.id} className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                        <div>
                          <p className="font-medium text-destructive">{esc.linkedTo} Issue</p>
                          <p className="text-sm text-muted-foreground">
                            Escalated to: {esc.escalationLevel}
                          </p>
                        </div>
                        <StatusBadge status={esc.status} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="module-card">
              <h3 className="font-heading font-semibold text-lg mb-4">All Orders</h3>
              <OrdersTable 
                orders={orders} 
                showActions 
                onApprove={handleApprove}
                onReject={handleReject}
              />
            </div>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-6">
            <div className="module-card">
              <h3 className="font-heading font-semibold text-lg mb-4">All Tickets</h3>
              <TicketsTable tickets={mockTickets} />
            </div>
          </TabsContent>

          <TabsContent value="academics" className="space-y-6">
            <SyllabusTracker />
            
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Teacher Attendance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Sunita Devi', 'Rajesh Gupta', 'Meena Kumari'].map((teacher, idx) => (
                      <div key={teacher} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <span className="font-medium">{teacher}</span>
                        <span className="text-success font-medium">{95 - idx * 2}% Present</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Student Dropout Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span>This Month</span>
                      <span className="text-destructive font-medium">2 students</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span>Last Month</span>
                      <span className="text-warning font-medium">3 students</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span>Quarter Total</span>
                      <span className="font-medium">8 students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="escalations" className="space-y-6">
            <EscalationForm />
            
            <div className="module-card">
              <h3 className="font-heading font-semibold text-lg mb-4">Escalation History</h3>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Linked To</th>
                      <th>Reason</th>
                      <th>Escalated To</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockEscalations.map((esc) => (
                      <tr key={esc.id}>
                        <td className="font-medium">{esc.linkedTo}</td>
                        <td className="max-w-xs truncate">{esc.reason}</td>
                        <td>{esc.escalationLevel}</td>
                        <td><StatusBadge status={esc.status} /></td>
                        <td>{new Date(esc.createdAt).toLocaleDateString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default Index;
