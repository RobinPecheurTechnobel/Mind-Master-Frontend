import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThinkerInformationComponent } from './components/thinker-information/thinker-information.component';

const routes: Routes = [
  {path : "", component : ThinkerInformationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkerManagementRoutingModule { }