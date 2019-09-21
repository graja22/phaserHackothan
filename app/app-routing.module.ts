import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { BannerComponent } from './banner/banner.component';
import { SignupComponent } from './signup/signup.component';
import { CalendarComponent } from './calendar/calendar.component';
const routes: Routes = [
  {
    path:"",
    component:BannerComponent
  },
  {
    path:"signin",
  component:SigninComponent
},
{
  path:"signup",
component:SignupComponent
},
{
  path:"banner",
  component:BannerComponent
},
{
  
    path:"banner/signup",
    component:SignupComponent
  },
  {
    path:"signin/calendar",
    component:CalendarComponent
  },
  {
    path:"signup/signin",
    component:SigninComponent
  },
  
    {
      path:"banner/signup/signin",
      component:SigninComponent
    }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
