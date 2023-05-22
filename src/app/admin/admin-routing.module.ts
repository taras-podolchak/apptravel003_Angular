import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {SaveTripComponent} from "./save-trip/save-trip.component";
import {Role} from "../shared/model/role.model";
import {RoleGuardService} from "../shared/service/role-guard.service";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ADMIN]},
  },
  {
    path: 'saveTrip',
    component: SaveTripComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ADMIN]},
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
