import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "./http.service";
import {Trip} from "../model/trip.model";
import {EndPoints} from "../end-points";


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpService: HttpService) {
  }

  getAll(): Observable<Trip[]> {
    return this.httpService
      .get(EndPoints.TRIPS);
  }

  getByTypeTrip(tripTypeSelected: number): Observable<any> {
    return this.httpService
      .param("typeTrip", tripTypeSelected.toString())
      .get(EndPoints.TYPE_TRIP);
  }


  getTripByTitle(title: string): Observable<Trip> {
    return this.httpService
      .param("title", title)
      .get(EndPoints.TRIP_TITLE);
  }

  update(title: string, trip: Trip): Observable<Trip> {
    return this.httpService
      .put(EndPoints.TRIPS + '/' + title, trip);
  }

  create(trip: Trip): Observable<Trip> {
    return this.httpService
      .post(EndPoints.TRIPS, trip);
  }

  delete(title: string) {
    return this.httpService
      .delete(EndPoints.TRIPS + '/' + title);
  }
}
