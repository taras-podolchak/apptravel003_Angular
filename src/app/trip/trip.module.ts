import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TripRoutingModule} from './trip-routing.module';
import {TripComponent} from './trip.component';
import {TripTypeComponent} from './trip-type/trip-type.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TripComponent,
    TripTypeComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TripModule {
}
