import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../../shared/service/trip.service";
import {Observable} from "rxjs";
import {Trip} from "../../shared/model/trip.model";

@Component({
  selector: 'app-save-trip',
  templateUrl: './save-trip.component.html',
  styleUrls: ['./save-trip.component.css']
})
export class SaveTripComponent implements OnInit {

  title = '';

  @Input() trip: Observable<Trip>;
  controlTripFormGroup: FormGroup;

  formErrors = {};

  submitted = false;
  titleExist = false;

  selectedTripType: number;
  selectedTripStatus: number;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private aRoute: ActivatedRoute,
    private tripService: TripService,
    private router: Router,
  ) {
    this.controlTripFormGroup = this.formBuilder.group({
      typeTrip: ['', Validators.required],
      statusTrip: ['', Validators.required],
      title: ['', Validators.required],
      photoTrip: ['', Validators.required],
      level: ['', Validators.required],
      transportType: ['', Validators.required],
      price: ['', Validators.required],
      general: ['', Validators.required],
      recommendation: ['', Validators.required],
      safety: ['', Validators.required],
      oneWayTrip: ['', Validators.required],
      returnTrip: ['', Validators.required],
      // activityList: ['', Validators.required],
    })

    this.controlTripFormGroup.valueChanges.subscribe((data) => {
      this.formErrors = {};
      for (const field in data) {
        const control = this.controlTripFormGroup.get(field);
        if (control && control.dirty && control.invalid) {
          this.formErrors[field] = true;
        }
      }
    });

  }

  ngOnInit(): void {
    if (this.trip) {
      this.title = "Modificacion del Trip"
      this.fillFormWithEvent(this.trip);
    } else {
      this.title = "Creacion del Trip"
      this.fillFormWithIdEve();
    }
  }

  fillFormWithIdEve() {
    this.controlTripFormGroup.setValue({
      typeTrip: null,
      statusTrip: null,
      title: null,
      photoTrip: null,
      level: null,
      transportType: null,
      price: null,
      general: null,
      recommendation: null,
      safety: null,
      oneWayTrip: null,
      returnTrip: null,
      //  activityList: null,
    })
  }

  fillFormWithEvent(trip: Observable<Trip>) {
    trip.subscribe(existTrip => {
      this.controlTripFormGroup.setValue({
        typeTrip: existTrip.typeTrip,
        statusTrip: existTrip.statusTrip,
        title: existTrip.title,
        photoTrip: existTrip.photoTrip,
        level: existTrip.level,
        transportType: existTrip.transportType,
        price: existTrip.price,
        general: existTrip.general,
        recommendation: existTrip.recommendation,
        safety: existTrip.safety,
        oneWayTrip: existTrip.oneWayTrip,
        returnTrip: existTrip.returnTrip,
        // activityList: existTrip.activityList,
      })
    });
  }

  saveEvent(form: any): void {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    const trip: Trip = {
      typeTrip: form.value.typeTrip,
      statusTrip: form.value.statusTrip,
      title: form.value.title,
      photoTrip: form.value.photoTrip,
      level: form.value.level,
      transportType: form.value.transportType,
      price: form.value.price,
      general: form.value.general,
      recommendation: form.value.recommendation,
      safety: form.value.safety,
      oneWayTrip: form.value.oneWayTrip,
      returnTrip: form.value.returnTrip,
      activityList: null,
      userList: null
    };

    this.tripService.save(trip).subscribe({
      next: () => this.toast.success('El Trip creado con exito!', 'Trip creado!'),
      error: () => this.toast.error('Error a la hora de crear un Trip', 'Error!'),
      complete: () => this.router.navigate(['/admin'])
    });


  }
}
