import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyListComponent } from './components/assembly-list/assembly-list.component';
import { AssemblyDetailledComponent } from './components/assembly-detailled/assembly-detailled.component';
import { IdeaManagementRoutingModule } from './idea-management-routing.module';



@NgModule({
  declarations: [
    AssemblyListComponent,
    AssemblyDetailledComponent
  ],
  imports: [
    CommonModule,
    IdeaManagementRoutingModule
  ],
  exports:[
    AssemblyListComponent
  ]
})
export class IdeaManagementModule { }
