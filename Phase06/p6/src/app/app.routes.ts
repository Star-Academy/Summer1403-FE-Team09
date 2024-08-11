import {Routes} from '@angular/router';
import {EditFormComponent} from './component/edit-form/edit-form.component';

export const routes: Routes = [
  {path: 'edit/:id', component: EditFormComponent},
];
