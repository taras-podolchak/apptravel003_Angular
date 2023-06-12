import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-activity-cards',
  templateUrl: './activity-cards.component.html',
  styleUrls: ['./activity-cards.component.css']
})
export class ActivityCardsComponent {

  @Input() tripSelected: Observable<Trip>;

}
