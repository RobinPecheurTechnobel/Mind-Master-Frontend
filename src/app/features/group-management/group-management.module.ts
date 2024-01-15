import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupManagementRoutingModule } from './group-management-routing.module';
import { GroupParentComponent } from './components/group-parent/group-parent.component';
import { GroupChildComponent } from './components/group-child/group-child.component';
import { AssemblyListComponent } from '../idea-management/components/assembly-list/assembly-list.component';
import { IdeaManagementModule } from '../idea-management/idea-management.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThinkerSearchDialogComponent } from './components/thinker-search-dialog/thinker-search-dialog.component';
import { GroupCreationComponent } from './components/group-creation/group-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroupParentComponent,
    GroupChildComponent,
    ThinkerSearchDialogComponent,
    GroupCreationComponent
  ],
  imports: [
    GroupManagementRoutingModule,
    CommonModule,
    IdeaManagementModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class GroupManagementModule { }
