import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CheckinComponent } from './pages/checkin/checkin.component';

export const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'checkin',
    component: CheckinComponent,
  }, 
];
