import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  tripTypeSelected!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  showAvailableTrips(event: number): void {
    this.tripTypeSelected = event;
  }
}
