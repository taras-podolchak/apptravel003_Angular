import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})

export class TripTypeComponent implements OnInit {
  @Output() tripTypeSelected: EventEmitter<number> = new EventEmitter();
  selectedTripType: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  showCarouselComponent(): void {
    this.tripTypeSelected.emit(this.selectedTripType);
  }
}
