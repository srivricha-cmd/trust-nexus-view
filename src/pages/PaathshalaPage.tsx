import { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { PortalHeader } from '@/components/layout/PortalHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LeaveForm } from '@/components/paathshala/LeaveForm';
import { SyllabusTracker } from '@/components/paathshala/SyllabusTracker';
import { AttendanceForm } from '@/components/paathshala/AttendanceForm';
import { StudentReportForm } from '@/components/paathshala/StudentReportForm';
import { StatusBadge } from '@/components/common/StatusBadge';
import { mockLeaveRequests } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaathshalaPage = () => {
  const [activeTab, setActiveTab] = useState('leave');

  return (
    <PortalLayout>
      <PortalHeader 
        title="Paathshala" 
        subtitle="Teacher Portal - Leave, Syllabus & Attendance Management"
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted/50 p-1 h-auto">
          <TabsTrigger value="leave" className="py-3">Leave</TabsTrigger>
          <TabsTrigger value="syllabus" className="py-3">Syllabus</TabsTrigger>
          <TabsTrigger value="attendance" className="py-3">Attendance</TabsTrigger>
          <TabsTrigger value="reports" className="py-3">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="leave" className="space-y-6">
          <LeaveForm />
          
          <div className="module-card">
            <h3 className="font-heading font-semibold text-lg mb-4">My Leave Applications</h3>
            <div className="grid gap-4">
              {mockLeaveRequests.map((leave) => (
                <Card key={leave.id} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">{leave.teacherName}</CardTitle>
                      <StatusBadge status={leave.status} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">From:</span>{' '}
                        <span className="font-medium">{new Date(leave.fromDate).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">To:</span>{' '}
                        <span className="font-medium">{new Date(leave.toDate).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Reason:</span>{' '}
                        <span className="font-medium">{leave.reason}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="syllabus" className="space-y-6">
          <SyllabusTracker />
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <AttendanceForm />
          
          <div className="module-card">
            <h3 className="font-heading font-semibold text-lg mb-4">Recent Attendance Records</h3>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Attendance %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01 Jan 2026</td>
                    <td>Class 5</td>
                    <td className="text-success font-medium">32</td>
                    <td className="text-destructive font-medium">3</td>
                    <td>
                      <span className="status-badge status-completed">91%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <StudentReportForm />
          
          <div className="module-card">
            <h3 className="font-heading font-semibold text-lg mb-4">Assessment Plan Guidelines</h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Weekly Assessment</h4>
                <p className="text-muted-foreground">
                  Plan topic-wise tests aligned with syllabus coverage. Each week should have at least one assessment activity.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Monthly Evaluation</h4>
                <p className="text-muted-foreground">
                  Conduct comprehensive monthly tests covering all topics. Submit results within 3 days of test completion.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PortalLayout>
  );
};

export default PaathshalaPage;
