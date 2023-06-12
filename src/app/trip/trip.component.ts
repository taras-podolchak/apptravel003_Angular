import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {TripService} from "../shared/service/trip.service";
import {Trip} from "../shared/model/trip.model";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  typeOfTripsSelected: number;
  tripSelected: Observable<Trip>;

  constructor(
    private tripService: TripService,
  ) {
  }

  showAvailableTrips(event: number): void {
    this.tripSelected = null;
    this.typeOfTripsSelected = event;
  }

  showTripDetail(event: string): void {
    this.tripSelected = this.tripService.getTripByTitle(event);
  }
}
