import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupParentComponent } from './components/group-parent/group-parent.component';
import { GroupCreationComponent } from './components/group-creation/group-creation.component';

const routes: Routes = [
    {path : "", component : GroupParentComponent},
    {path : "new", component : GroupCreationComponent},
    {path : ":id", component : GroupParentComponent},
    //TODO page Group not found
    {path : "**", component : GroupParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupManagementRoutingModule { }