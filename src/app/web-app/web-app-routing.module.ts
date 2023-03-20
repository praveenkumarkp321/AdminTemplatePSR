import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { WebAppComponent } from './web-app.component';

const routes: Routes = [
  {
    path: 'sample', component: SampleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule { }
