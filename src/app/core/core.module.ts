import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
