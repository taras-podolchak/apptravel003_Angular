import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../shared/model/trip.model";
import {TripService} from "../shared/service/trip.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tripSelected: Observable<Trip>;

  constructor(
    private tripService: TripService,
  ) {
  }

  ngOnInit(): void {
  }

  showTripDetail(event: string): void {
    this.tripSelected = this.tripService.getTripByTitle(event);
  }
}
