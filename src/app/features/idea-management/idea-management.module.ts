import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyListComponent } from './components/assembly-list/assembly-list.component';
import { AssemblyDetailledComponent } from './components/assembly-detailled/assembly-detailled.component';
import { IdeaManagementRoutingModule } from './idea-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverCompositionDirective } from './directives/hover-composition.directive';
import { AssemblyCreationComponent } from './components/assembly-creation/assembly-creation.component';



@NgModule({
  declarations: [
    AssemblyListComponent,
    AssemblyDetailledComponent,
    HoverCompositionDirective,
    AssemblyCreationComponent
  ],
  imports: [
    CommonModule,
    IdeaManagementRoutingModule, 
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AssemblyListComponent
  ]
})
export class IdeaManagementModule { }
