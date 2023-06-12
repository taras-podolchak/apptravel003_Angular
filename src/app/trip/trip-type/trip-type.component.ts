import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})

export class TripTypeComponent {
  @Output() tripTypeSelected: EventEmitter<number> = new EventEmitter();
  selectedTripType: number;

  showCarouselComponent(): void {
    this.tripTypeSelected.emit(this.selectedTripType);
  }
}
