import { Order, Ticket, LeaveRequest, SyllabusEntry, StudentReport, AttendanceRecord, Project, Escalation } from '@/types/portal';

export const mockOrders: Order[] = [
  {
    id: '1',
    requesterName: 'Ramesh Kumar',
    category: 'Stationery',
    purpose: 'Notebooks and pens for new batch of students',
    requiredByDate: '2026-01-10',
    urgency: 'Medium',
    status: 'Pending',
    createdAt: '2026-01-01',
  },
  {
    id: '2',
    requesterName: 'Priya Sharma',
    category: 'Teaching Material',
    purpose: 'Science lab equipment for experiments',
    requiredByDate: '2026-01-15',
    urgency: 'High',
    status: 'Approved',
    createdAt: '2025-12-28',
    approvedAt: '2025-12-30',
  },
  {
    id: '3',
    requesterName: 'Amit Verma',
    category: 'Infrastructure',
    purpose: 'Repair of classroom fans and lights',
    requiredByDate: '2026-01-05',
    urgency: 'High',
    status: 'Completed',
    createdAt: '2025-12-20',
    approvedAt: '2025-12-22',
    completedAt: '2026-01-02',
  },
];

export const mockTickets: Ticket[] = [
  {
    id: '1',
    raisedTo: 'IT Support',
    taskDescription: 'Projector not working in Class 5 room',
    planDate: '2026-01-03',
    urgency: 'High',
    status: 'Open',
    createdAt: '2026-01-01',
    slaDeadline: '2026-01-02',
  },
  {
    id: '2',
    raisedTo: 'Maintenance',
    taskDescription: 'Water cooler needs servicing',
    planDate: '2026-01-07',
    urgency: 'Low',
    status: 'In Progress',
    createdAt: '2025-12-29',
    slaDeadline: '2026-01-01',
  },
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    teacherName: 'Sunita Devi',
    fromDate: '2026-01-05',
    toDate: '2026-01-07',
    reason: 'Family function',
    status: 'Pending',
    createdAt: '2026-01-01',
  },
  {
    id: '2',
    teacherName: 'Rajesh Gupta',
    fromDate: '2026-01-10',
    toDate: '2026-01-10',
    reason: 'Medical appointment',
    status: 'Approved',
    createdAt: '2025-12-28',
  },
];

export const mockSyllabusEntries: SyllabusEntry[] = [
  {
    id: '1',
    teacherName: 'Sunita Devi',
    className: 'Class 5',
    subject: 'Mathematics',
    week: 1,
    month: 'January 2026',
    topicsPlanned: ['Addition', 'Subtraction', 'Word Problems'],
    topicsCovered: ['Addition', 'Subtraction'],
    completionPercentage: 67,
  },
  {
    id: '2',
    teacherName: 'Rajesh Gupta',
    className: 'Class 6',
    subject: 'Science',
    week: 1,
    month: 'January 2026',
    topicsPlanned: ['Plant Life', 'Photosynthesis'],
    topicsCovered: ['Plant Life'],
    completionPercentage: 50,
  },
  {
    id: '3',
    teacherName: 'Meena Kumari',
    className: 'Class 4',
    subject: 'Hindi',
    week: 1,
    month: 'January 2026',
    topicsPlanned: ['Kavita', 'Grammar', 'Writing'],
    topicsCovered: ['Kavita', 'Grammar', 'Writing'],
    completionPercentage: 100,
  },
];

export const mockStudentReports: StudentReport[] = [
  {
    id: '1',
    teacherName: 'Sunita Devi',
    reportType: 'Weekly',
    periodStart: '2025-12-23',
    periodEnd: '2025-12-28',
    totalStudentsOnboarded: 35,
    studentsLeft: 2,
    topicsCovered: ['Fractions basics', 'Simple division'],
    issuesFaced: 'Some students struggling with fraction concepts',
    createdAt: '2025-12-29',
  },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: '1',
    date: '2026-01-01',
    className: 'Class 5',
    totalPresent: 32,
    totalAbsent: 3,
    photoUrl: '/placeholder.svg',
    createdAt: '2026-01-01',
  },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Digital Classroom Setup',
    responsibilities: ['Install projectors', 'Setup computers', 'Train teachers'],
    status: 'Active',
    remarks: 'Phase 1 completed. Phase 2 starting next week.',
  },
  {
    id: '2',
    name: 'Library Expansion',
    responsibilities: ['Procure books', 'Setup shelves', 'Catalog system'],
    status: 'On Hold',
    remarks: 'Waiting for furniture delivery.',
  },
  {
    id: '3',
    name: 'Sports Equipment',
    responsibilities: ['Purchase equipment', 'Setup sports area', 'Schedule activities'],
    status: 'Completed',
    remarks: 'All equipment received and installed.',
  },
];

export const mockEscalations: Escalation[] = [
  {
    id: '1',
    linkedTo: 'Order',
    linkedItemId: '3',
    reason: 'Infrastructure repair delayed beyond required date',
    escalationLevel: 'Operations Head',
    status: 'Acknowledged',
    createdAt: '2025-12-28',
  },
];

export const teachers = ['Sunita Devi', 'Rajesh Gupta', 'Meena Kumari'];
export const classes = ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];
export const subjects = ['Mathematics', 'Science', 'Hindi', 'English', 'Social Studies'];
