import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Observable, timer} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  @Input() tripSelected: Observable<Trip>;
  @ViewChild("detail") MyProp: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tripSelected']) {
      this.ngAfterViewInit();
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
