import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TripService} from "../../service/trip.service";
import {Observable, of, timer} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  @Input() tripTitleSelected!: string;
  @ViewChild("detail") MyProp: ElementRef;

  trip: Observable<Trip> = of(null);

  constructor(
    private tripService: TripService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tripTitleSelected']) {
      this.ngAfterViewInit();
      this.trip = this.tripService.getTripByTitle(this.tripTitleSelected);
    }
  }

  ngAfterViewInit() {
    timer(100).subscribe(() => {
      if (this.MyProp) {
        this.MyProp.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    });
  }
}
