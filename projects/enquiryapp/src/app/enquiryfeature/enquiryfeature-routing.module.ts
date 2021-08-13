import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryfeatureComponent } from './enquiryfeature.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryfeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryfeatureRoutingModule { }
