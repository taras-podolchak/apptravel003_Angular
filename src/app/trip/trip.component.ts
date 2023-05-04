import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TripService} from "../shared/service/trip.service";
import {Trip} from "../shared/model/trip.model";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: Observable<Trip[]>;
  tripSelected: Observable<Trip>;

  constructor(
    private tripService: TripService,
  ) {
  }

  ngOnInit(): void {
  }

  showAvailableTrips(event: number): void {
    this.tripSelected = null;
    this.trips = this.tripService.getByTypeTrip(event);
  }

  showTripDetail(event: string): void {
    this.tripSelected = this.tripService.getTripByTitle(event);
  }
}
