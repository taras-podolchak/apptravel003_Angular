import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripCarouselComponent} from './components/trip-carousel/trip-carousel.component';
import {RouterLink} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TripDetailComponent} from './components/trip-detail/trip-detail.component';
import { ActivityCardsComponent } from './components/activity-cards/activity-cards.component';


@NgModule({
  declarations: [
    TripCarouselComponent,
    TripDetailComponent,
    ActivityCardsComponent,
  ],
  exports: [
    TripCarouselComponent,
    TripDetailComponent,
    ActivityCardsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
  ]
})
export class SharedModule {
}
