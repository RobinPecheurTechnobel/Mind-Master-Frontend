import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupManagementRoutingModule } from './group-management-routing.module';
import { GroupParentComponent } from './components/group-parent/group-parent.component';
import { GroupChildComponent } from './components/group-child/group-child.component';



@NgModule({
  declarations: [
    GroupParentComponent,
    GroupChildComponent
  ],
  imports: [
    GroupManagementRoutingModule,
    CommonModule
  ]
})
export class GroupManagementModule { }
