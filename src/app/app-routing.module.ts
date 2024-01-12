import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", loadChildren : () => import("./core/core.module").then(m => m.CoreModule)},
  {path : "profil", loadChildren : () => import("./features/thinker-management/thinker-management.module").then(m => m.ThinkerManagementModule)},
  {path : "group", loadChildren : () => import("./features/group-management/group-management.module").then(m => m.GroupManagementModule)},
  {path : "assembly", loadChildren : () => import("./features/idea-management/idea-management.module").then(m => m.IdeaManagementModule)},
  { path : "**", redirectTo : "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
