import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    ChartsComponent,
    DoughnutChartComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
