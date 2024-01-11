import { ENVIRONMENT_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.development';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { SharedModule } from './shared/shared.module';
import { DialogService } from './shared/services/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    { provide : "urlAPI", useValue : environment.backendUrl+":"+environment.backendPort},
    { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true },
    { provide : ENVIRONMENT_INITIALIZER, useFactory : initializeDialogService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeDialogService() {
  return () => {
    inject(DialogService)
  };
}