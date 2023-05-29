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

  @Input() typeOfTripsSelected: number;
  @Output() tripSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild("carousel") MyProp: ElementRef;

  trips: Observable<Trip[]> = of([]);
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
    this.search();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trips']) {
      this.ngAfterViewInit();
    }
  }

  private search() {
    if (this.typeOfTripsSelected)
      this.trips = this.tripService.getByTypeTrip(this.typeOfTripsSelected);
    else
      this.trips = this.tripService.getAll();
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
    this.tripService.delete(title).subscribe(() => this.search());
  }

  update(trip: Trip) {
    this.router.navigate(['/admin/saveTrip'], {queryParams: {object: JSON.stringify(trip)}});
  }
}



