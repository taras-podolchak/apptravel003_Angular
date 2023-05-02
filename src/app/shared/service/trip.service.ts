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

  getByTypeTrip(tripTypeSelected: number) {
    return this.httpService
      .param("typeTrip", tripTypeSelected.toString())
      .get(EndPoints.TYPE_TRIP);
  }

  /*
    getTripByTitle(mobile: number, totalPurchase: number) : Observable<Trip>{
      return this.httpService
        .param('totalPurchase', totalPurchase.toString())
        .get(EndPoints.POINTS + '/' + mobile + TripService.APPLICABLE);
    }
  */

}
