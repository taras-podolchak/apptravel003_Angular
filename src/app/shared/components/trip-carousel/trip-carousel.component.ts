import {Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {TripService} from "../../service/trip.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-trip-carousel',
  templateUrl: './trip-carousel.component.html',
  styleUrls: ['./trip-carousel.component.css']
})
export class TripCarouselComponent implements OnInit {

  @Input() tripTypeSelected!: number;
  @Output() tripSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild("carousel") MyProp: ElementRef;

  trips: Observable<any> = of([]);
  typeTrips: string[] = [
    "Eventos de un dia",
    "Eventos de finde de semana",
    "Aventuras mas largas"];

  constructor(
    private tripService: TripService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tripTypeSelected']) {
      this.trips = this.tripService.getByTypeTrip(this.tripTypeSelected);
      this.ngAfterViewInit();
    }
  }

  ngAfterViewInit() {
    if (this.MyProp) {
      this.MyProp.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  showTripDetail(title: string): void {
    this.tripSelected.emit(title);
  }

  isAdmin() {
    /*  var titlee = this.location.prepareExternalUrl(this.location.path());
      if (titlee.charAt(0) === '#') {
        titlee = titlee.slice(1);
      }
      if (titlee === '/admin') {
        this.title = 'Todos los eventos';

    return true;
     } else {*/
    return false;
    // }
  }

  deleteTrip(title: string) {
    /*  return this.tripService.deleteTrip('' + title).then((() => {
        this.toast.warning('El evento eliminado con exito!', 'Evento eliminado!');
      })).catch(error => {
        this.toast.error(error, 'Error a la hora de eliminar el evento!');
      });*/
  }
}
