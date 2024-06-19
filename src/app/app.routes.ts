import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'task',
        component: TaskListComponent,
      },
      {
        path: 'task/details/:tid',
        component: TaskDetailsComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      // {
      //   path: 'register',
      //   component: RegisterComponent,
      // },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
