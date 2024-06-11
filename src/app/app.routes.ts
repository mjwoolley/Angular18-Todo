import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
  {
    path: 'tasks',
    component: TaskListComponent,
  },
];
