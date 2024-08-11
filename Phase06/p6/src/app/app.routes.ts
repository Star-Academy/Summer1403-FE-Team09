import {Routes} from '@angular/router';
import {EditFormComponent} from './component/edit-form/edit-form.component';
import {HomeComponent} from "./component/home/home.component";
import {SignupComponent} from "./component/signup/signup.component";

export const routes: Routes = [
  {path: 'edit/:id', component: EditFormComponent},
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
];
