import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpService} from "./http.service";
import {Trip} from "../model/trip.model";


@Injectable({
  providedIn: 'root'
})
export class TripService {

  trips: Trip[] = [];

  constructor(private httpService: HttpService) {
    this.trips = [
      {
        id_doc: '1',
        typeTrip: 1,
        statusTrip: 1,
        title: 'Viaje a la playa',
        photoTrip: 'url_de_la_foto',
        level: 2,
        transportType: 1,
        price: 500,
        general: 'Descripción general del viaje',
        recommendation: 'Recomendaciones para el viaje',
        safety: 'Consideraciones de seguridad',
        oneWayTrip: 1,
        returnTrip: 1
      },
      {
        id_doc: '2',
        typeTrip: 2,
        statusTrip: 2,
        title: 'Viaje a la montaña',
        photoTrip: 'url_de_la_foto',
        level: 3,
        transportType: 2,
        price: 800,
        general: 'Descripción general del viaje',
        recommendation: 'Recomendaciones para el viaje',
        safety: 'Consideraciones de seguridad',
        oneWayTrip: 1,
        returnTrip: 1
      },
      {
        id_doc: '3',
        typeTrip: 3,
        statusTrip: 3,
        title: 'Viaje a la ciudad',
        photoTrip: 'url_de_la_foto',
        level: 1,
        transportType: 3,
        price: 350,
        general: 'Descripción general del viaje',
        recommendation: 'Recomendaciones para el viaje',
        safety: 'Consideraciones de seguridad',
        oneWayTrip: 1,
        returnTrip: 1
      }];
  }

  getAll(): Observable<Trip[]> {
    return of(this.trips);
  }

  /*
    getTripByTitle(mobile: number, totalPurchase: number) : Observable<Trip>{
      return this.httpService
        .param('totalPurchase', totalPurchase.toString())
        .get(EndPoints.POINTS + '/' + mobile + TripService.APPLICABLE);
    }
  */
}
