import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupManagementRoutingModule } from './group-management-routing.module';
import { GroupParentComponent } from './components/group-parent/group-parent.component';
import { GroupChildComponent } from './components/group-child/group-child.component';
import { AssemblyListComponent } from '../idea-management/components/assembly-list/assembly-list.component';
import { IdeaManagementModule } from '../idea-management/idea-management.module';



@NgModule({
  declarations: [
    GroupParentComponent,
    GroupChildComponent
  ],
  imports: [
    GroupManagementRoutingModule,
    CommonModule,
    IdeaManagementModule
  ]
})
export class GroupManagementModule { }
