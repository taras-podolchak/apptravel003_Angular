import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Observable, timer} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent {

  @Input() tripSelected: Observable<Trip>;
  @ViewChild("detail") MyProp: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tripSelected']) {
      this.ngAfterViewInit();
    }
  }

  ngAfterViewInit() {
    timer(1500).subscribe(() => {
      if (this.MyProp) {
        this.MyProp.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    });
  }
}
