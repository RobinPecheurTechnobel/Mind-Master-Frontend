import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThinkerInformationComponent } from './components/thinker-information/thinker-information.component';
import { ThinkerEditionComponent } from './components/thinker-edition/thinker-edition.component';

const routes: Routes = [
  {path : "", component : ThinkerInformationComponent},
  {path : "edition", component : ThinkerEditionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkerManagementRoutingModule { }