import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAppComponent } from './web-app/web-app.component';

const routes: Routes = [
  { path: '', component: WebAppComponent },

  { path: "web-app", component:WebAppComponent, loadChildren: () => import("./web-app/web-app.module").then(m => m.WebAppModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
