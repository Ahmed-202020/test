import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"} ,
  {path:"login" , component:LoginComponent} ,
  {path:"register" , component:RegisterComponent} ,
  {path:"home" , component:HomeComponent} ,
  {path:"forget-pass" , component:ForgetPasswordComponent} ,
  {path:"about" , component:AboutUsComponent} ,
  {path:"contact" , component:ContactComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
