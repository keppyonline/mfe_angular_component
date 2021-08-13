import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryfeatureRoutingModule } from './enquiryfeature-routing.module';
import { EnquiryfeatureComponent } from './enquiryfeature.component';


@NgModule({
  declarations: [
    EnquiryfeatureComponent
  ],
  imports: [
    CommonModule,
    EnquiryfeatureRoutingModule
  ]
})
export class EnquiryfeatureModule { }
