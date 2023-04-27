import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripCarouselComponent} from './components/trip-carousel/trip-carousel.component';
import {RouterLink} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    TripCarouselComponent
  ],
  exports: [
    TripCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
  ]
})
export class SharedModule {
}
