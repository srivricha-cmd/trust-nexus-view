import { StatCard } from '@/components/common/StatCard';
import { Package, Ticket, BookOpen, Users, AlertTriangle, TrendingDown } from 'lucide-react';
import { mockOrders, mockTickets, mockSyllabusEntries, mockAttendanceRecords, mockLeaveRequests } from '@/data/mockData';

export const DashboardWidgets = () => {
  const pendingOrders = mockOrders.filter(o => o.status === 'Pending').length;
  const openTickets = mockTickets.filter(t => t.status !== 'Complete').length;
  const avgSyllabusProgress = Math.round(
    mockSyllabusEntries.reduce((acc, e) => acc + e.completionPercentage, 0) / mockSyllabusEntries.length
  );
  const totalPresent = mockAttendanceRecords.reduce((acc, r) => acc + r.totalPresent, 0);
  const totalAbsent = mockAttendanceRecords.reduce((acc, r) => acc + r.totalAbsent, 0);
  const attendanceRate = totalPresent + totalAbsent > 0 
    ? Math.round((totalPresent / (totalPresent + totalAbsent)) * 100)
    : 0;
  const pendingLeaves = mockLeaveRequests.filter(l => l.status === 'Pending').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard 
        title="Pending Orders"
        value={pendingOrders}
        icon={Package}
        iconBgClass="bg-warning/10"
      />
      <StatCard 
        title="Open Tickets"
        value={openTickets}
        icon={Ticket}
        iconBgClass="bg-info/10"
      />
      <StatCard 
        title="Syllabus Progress"
        value={`${avgSyllabusProgress}%`}
        icon={BookOpen}
        iconBgClass="bg-primary/10"
      />
      <StatCard 
        title="Attendance Rate"
        value={`${attendanceRate}%`}
        icon={Users}
        iconBgClass="bg-success/10"
      />
      <StatCard 
        title="Pending Leaves"
        value={pendingLeaves}
        icon={AlertTriangle}
        iconBgClass="bg-destructive/10"
      />
      <StatCard 
        title="Dropouts (MTD)"
        value={2}
        icon={TrendingDown}
        iconBgClass="bg-muted"
      />
    </div>
  );
};
