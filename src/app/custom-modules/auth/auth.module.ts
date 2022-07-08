import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [
    LoginComponent,
   
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule implements SharedModule { }
