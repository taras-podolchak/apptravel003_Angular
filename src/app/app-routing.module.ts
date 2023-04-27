import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TripComponent} from "./trip/trip/trip.component";

const routes: Routes = [
  {path: '', component: TripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
