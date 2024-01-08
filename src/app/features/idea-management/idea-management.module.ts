import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyListComponent } from './components/assembly-list/assembly-list.component';



@NgModule({
  declarations: [
    AssemblyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AssemblyListComponent
  ]
})
export class IdeaManagementModule { }
