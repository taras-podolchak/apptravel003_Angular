import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {SaveTripComponent} from "./save-trip/save-trip.component";

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'saveTrip', component: SaveTripComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
