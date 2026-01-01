export type OrderCategory = 'Stationery' | 'Teaching Material' | 'Infrastructure' | 'Travel' | 'Other';
export type Urgency = 'Low' | 'Medium' | 'High';
export type OrderStatus = 'Pending' | 'Approved' | 'Completed' | 'Closed' | 'Rejected';
export type TicketStatus = 'Open' | 'In Progress' | 'Complete';
export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';
export type EscalationLevel = 'Project Coordinator' | 'Operations Head' | 'Managing Director';

export interface Order {
  id: string;
  requesterName: string;
  category: OrderCategory;
  purpose: string;
  requiredByDate: string;
  urgency: Urgency;
  status: OrderStatus;
  createdAt: string;
  approvedAt?: string;
  completedAt?: string;
}

export interface Ticket {
  id: string;
  raisedTo: string;
  taskDescription: string;
  planDate: string;
  fileUrl?: string;
  urgency: Urgency;
  status: TicketStatus;
  createdAt: string;
  slaDeadline: string;
}

export interface LeaveRequest {
  id: string;
  teacherName: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: LeaveStatus;
  createdAt: string;
}

export interface SyllabusEntry {
  id: string;
  teacherName: string;
  className: string;
  subject: string;
  week: number;
  month: string;
  topicsPlanned: string[];
  topicsCovered: string[];
  completionPercentage: number;
}

export interface StudentReport {
  id: string;
  teacherName: string;
  reportType: 'Weekly' | 'Monthly';
  periodStart: string;
  periodEnd: string;
  totalStudentsOnboarded: number;
  studentsLeft: number;
  topicsCovered: string[];
  issuesFaced: string;
  createdAt: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  className: string;
  totalPresent: number;
  totalAbsent: number;
  photoUrl: string;
  studentPhotoUrl?: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  responsibilities: string[];
  status: 'Active' | 'On Hold' | 'Completed';
  remarks: string;
}

export interface Escalation {
  id: string;
  linkedTo: 'Order' | 'Ticket' | 'Academic';
  linkedItemId: string;
  reason: string;
  escalationLevel: EscalationLevel;
  status: 'Raised' | 'Acknowledged' | 'Resolved';
  createdAt: string;
}
