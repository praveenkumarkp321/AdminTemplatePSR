import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { SampleFormComponent } from './sample-form/sample-form.component';


@NgModule({
  declarations: [
    SampleFormComponent
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
