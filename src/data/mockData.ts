export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  labels: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'event';
  color: string;
}

export const mockUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@company.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15T10:30:00Z' },
  { id: 2, name: 'Bob Smith', email: 'bob@company.com', role: 'Manager', status: 'active', lastLogin: '2024-01-15T09:15:00Z' },
  { id: 3, name: 'Carol Davis', email: 'carol@company.com', role: 'Developer', status: 'inactive', lastLogin: '2024-01-10T14:20:00Z' },
  { id: 4, name: 'David Wilson', email: 'david@company.com', role: 'Designer', status: 'active', lastLogin: '2024-01-15T11:45:00Z' },
  { id: 5, name: 'Eva Brown', email: 'eva@company.com', role: 'Developer', status: 'active', lastLogin: '2024-01-15T08:30:00Z' },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design System Update',
    description: 'Update the design system with new components',
    status: 'todo',
    priority: 'high',
    assignee: 'David Wilson',
    dueDate: '2024-01-20',
    labels: ['Design', 'UI/UX']
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Integrate payment gateway API',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Carol Davis',
    dueDate: '2024-01-18',
    labels: ['Backend', 'API']
  },
  {
    id: '3',
    title: 'User Testing',
    description: 'Conduct user testing for new features',
    status: 'review',
    priority: 'medium',
    assignee: 'Alice Johnson',
    dueDate: '2024-01-22',
    labels: ['Testing', 'UX']
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Optimize application performance',
    status: 'done',
    priority: 'medium',
    assignee: 'Eva Brown',
    dueDate: '2024-01-15',
    labels: ['Performance', 'Frontend']
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Team Standup',
    date: '2024-01-16',
    time: '09:00',
    type: 'meeting',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: '2024-01-20',
    time: '17:00',
    type: 'deadline',
    color: 'bg-red-500'
  },
  {
    id: '3',
    title: 'Company All-Hands',
    date: '2024-01-22',
    time: '14:00',
    type: 'event',
    color: 'bg-green-500'
  },
];

export const chartData = {
  revenue: [
    { month: 'Jan', value: 65000 },
    { month: 'Feb', value: 59000 },
    { month: 'Mar', value: 80000 },
    { month: 'Apr', value: 81000 },
    { month: 'May', value: 76000 },
    { month: 'Jun', value: 95000 },
  ],
  users: [
    { month: 'Jan', active: 1200, inactive: 300 },
    { month: 'Feb', active: 1350, inactive: 280 },
    { month: 'Mar', active: 1500, inactive: 250 },
    { month: 'Apr', active: 1680, inactive: 220 },
    { month: 'May', active: 1820, inactive: 200 },
    { month: 'Jun', active: 2000, inactive: 180 },
  ]
};