import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {RegisterComponent} from "./shared/components/register/register.component";

const routes: Routes = [
  {path: '', loadChildren: () => import("./trip/trip.module").then((m) => m.TripModule)},
  {path: 'admin', loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule)},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
