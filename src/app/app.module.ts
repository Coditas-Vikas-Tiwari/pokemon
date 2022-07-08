import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { AuthService } from './custom-modules/auth/services/auth.service';
import { PokeModule } from './custom-modules/poke/poke.module';
import { AuthModule } from './custom-modules/auth/auth.module';
import { SharedModule } from './custom-modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokeModule,
    AuthModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
