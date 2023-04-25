import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { TripTypeComponent } from './trip-type/trip-type.component';



@NgModule({
  declarations: [
    TripComponent,
    TripTypeComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
