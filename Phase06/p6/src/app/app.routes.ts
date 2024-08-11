import {Routes} from '@angular/router';
import {EditFormComponent} from './component/edit-form/edit-form.component';
import {HomeComponent} from "./component/home/home.component";

export const routes: Routes = [
  {path: 'edit/:id', component: EditFormComponent},
  {path: '', component: HomeComponent},
];
