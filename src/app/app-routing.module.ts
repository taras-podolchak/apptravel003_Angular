import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./shared/components/register/register.component";

const routes: Routes = [
  {path: 'register', loadChildren: () => import("./trip/trip.module").then((m) => m.TripModule)},
  {path: 'admin', loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule)},
  {path: '', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
