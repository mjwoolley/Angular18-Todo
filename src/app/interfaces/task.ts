export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate?: Date;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  subtasks?: Task[];
  labels?: string[];
  createdBy: string;
  createdAt: Date;
  status?: 'Todo' | 'InProgress' | 'Ready';
}
