import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    SearchDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ]
})
export class SharedModule { }
