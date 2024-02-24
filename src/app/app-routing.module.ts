import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHomePageComponent } from './form-home-page/form-home-page.component';
import { CreateFormComponent } from './create-form/create-form.component';

const routes: Routes = [
  {
    path:"",
    component:FormHomePageComponent
  },
  {
    path:"create-form",
    component:CreateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
