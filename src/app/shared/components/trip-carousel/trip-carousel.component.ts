import {Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Observable, of, timer} from "rxjs";
import {Trip} from "../../model/trip.model";
import {AuthService} from "../../service/auth.service";
import {TripService} from "../../service/trip.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trip-carousel',
  templateUrl: './trip-carousel.component.html',
  styleUrls: ['./trip-carousel.component.css']
})
export class TripCarouselComponent implements OnInit {

  @Input() trips: Observable<Trip[]> = of([]);
  @Output() tripSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild("carousel") MyProp: ElementRef;

  typeTrips: string[] = [
    "Eventos de un dia",
    "Eventos de finde de semana",
    "Aventuras mas largas"];

  constructor(
    private authService: AuthService,
    private tripService: TripService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trips']) {
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

  showTripDetail(title: string): void {
    this.tripSelected.emit(title);
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  delete(title: string) {
    this.tripService.delete(title);
  }

  update(trip: Trip) {
    this.router.navigate(['/admin/saveTrip'],  { queryParams: { object: JSON.stringify(trip) } });
  }
}
