import {Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Observable, of, timer} from "rxjs";
import {Trip} from "../../model/trip.model";

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

  constructor() {
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
