import { Routes } from '@angular/router';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { profileGuardGuard } from './guards/profile-guard.guard';
import { authenticatorGuardGuard } from './guards/authenticator-guard.guard';

export const routes: Routes = [
  { path: 'edit/:id', component: EditFormComponent },
  { path: '', component: HomeComponent },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [authenticatorGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authenticatorGuardGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [profileGuardGuard],
  },
];
