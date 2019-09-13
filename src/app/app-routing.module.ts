import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SelfViewComponent } from './self-view/self-view.component';


const routes: Routes = [
  {path:"documents",component:DocumentsComponent},
  {path:"payroll",component:PayrollComponent},
  {path:"personal",component:PersonalDetailsComponent},
  {path:"selfview",component:SelfViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
