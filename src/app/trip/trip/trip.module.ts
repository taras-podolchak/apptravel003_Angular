import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TripRoutingModule} from './trip-routing.module';
import {TripComponent} from './trip.component';
import {TripTypeComponent} from './trip-type/trip-type.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    TripComponent,
    TripTypeComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule
  ]
})
export class TripModule {
}
