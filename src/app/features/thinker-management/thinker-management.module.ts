import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinkerManagementRoutingModule } from './thinker-management-routing.module';
import { ThinkerInformationComponent } from './components/thinker-information/thinker-information.component';
import { ThinkerEditionComponent } from './components/thinker-edition/thinker-edition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThinkerInformationComponent,
    ThinkerEditionComponent
  ],
  imports: [
    CommonModule,
    ThinkerManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ThinkerManagementModule { }
