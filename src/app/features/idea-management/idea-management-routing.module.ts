import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyDetailledComponent } from './components/assembly-detailled/assembly-detailled.component';
import { AssemblyEditionComponent } from './components/assembly-edition/assembly-edition.component';

const routes: Routes = [
    {path : ":id", component : AssemblyDetailledComponent},
    {path : ":id/edit", component : AssemblyEditionComponent},
    //TODO page Group not found
    {path : "**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaManagementRoutingModule { }