import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TripCarouselComponent} from './components/trip-carousel/trip-carousel.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TripDetailComponent} from './components/trip-detail/trip-detail.component';
import {ActivityCardsComponent} from './components/activity-cards/activity-cards.component';
import {UserCarouselComponent} from './components/user-carousel/user-carousel.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TripCarouselComponent,
    TripDetailComponent,
    ActivityCardsComponent,
    UserCarouselComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    TripCarouselComponent,
    TripDetailComponent,
    ActivityCardsComponent,
    UserCarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLinkActive,
  ]
})
export class SharedModule {
}
