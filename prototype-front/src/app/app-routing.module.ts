import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path:"",
    component:AuthLayoutComponent,
    loadChildren:()=> import("./pages/auth/auth.module").then(m=>m.AuthModule),
  },
  {
    path:"dashboard",
    component:DashboardLayoutComponent,
    loadChildren:()=> import("./pages/dashboard/dashboard.module").then(m=>m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
