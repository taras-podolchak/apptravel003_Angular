import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TripService} from "../../service/trip.service";
import {Observable, of} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-trip-carousel',
  templateUrl: './trip-carousel.component.html',
  styleUrls: ['./trip-carousel.component.css']
})
export class TripCarouselComponent implements OnInit {

  @Output() tripSelected = new EventEmitter();
  trips: Observable<any> = of([]);

  constructor(
    //  public location: Location,
    private tripService: TripService,
    private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.trips = this.tripService.getAll();
  }

  getTripDetail(idEve: string): void {
    //this.tripSelected.emit(idEve);
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
