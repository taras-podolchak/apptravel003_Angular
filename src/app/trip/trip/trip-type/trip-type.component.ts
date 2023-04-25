import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})

export class TripTypeComponent implements OnInit {
  typeTripSelected = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showTrip() {
    this.typeTripSelected = true;
  }
}
