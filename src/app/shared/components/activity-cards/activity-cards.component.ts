import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../model/trip.model";
import {Activity} from "../../model/activity.model";

@Component({
  selector: 'app-activity-cards',
  templateUrl: './activity-cards.component.html',
  styleUrls: ['./activity-cards.component.css']
})
export class ActivityCardsComponent implements OnInit {

  @Input() tripSelected: Observable<Trip>;
  activities: Activity[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
