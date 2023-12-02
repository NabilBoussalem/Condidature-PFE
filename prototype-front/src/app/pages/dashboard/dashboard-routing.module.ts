import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path:"",
    component:ChartsComponent
  },
  {
    path:"crud",
    component:CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
