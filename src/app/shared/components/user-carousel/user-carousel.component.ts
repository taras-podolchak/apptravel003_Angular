import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-user-carousel',
  templateUrl: './user-carousel.component.html',
  styleUrls: ['./user-carousel.component.css']
})
export class UserCarouselComponent {

  @Input() tripSelected: Observable<Trip>;

}
