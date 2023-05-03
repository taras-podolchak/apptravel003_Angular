import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../model/trip.model";

@Component({
  selector: 'app-user-carousel',
  templateUrl: './user-carousel.component.html',
  styleUrls: ['./user-carousel.component.css']
})
export class UserCarouselComponent implements OnInit {

  @Input() tripSelected: Observable<Trip>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
