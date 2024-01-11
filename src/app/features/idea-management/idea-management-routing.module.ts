import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyDetailledComponent } from './components/assembly-detailled/assembly-detailled.component';

const routes: Routes = [
    {path : ":id", component : AssemblyDetailledComponent},
    //TODO page Group not found
    {path : "**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaManagementRoutingModule { }