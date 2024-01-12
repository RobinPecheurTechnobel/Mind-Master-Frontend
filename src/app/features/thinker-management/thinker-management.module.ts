import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinkerManagementRoutingModule } from './thinker-management-routing.module';
import { ThinkerInformationComponent } from './components/thinker-information/thinker-information.component';



@NgModule({
  declarations: [
    ThinkerInformationComponent
  ],
  imports: [
    CommonModule,
    ThinkerManagementRoutingModule
  ]
})
export class ThinkerManagementModule { }
