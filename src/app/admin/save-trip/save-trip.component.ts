import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../../shared/service/trip.service";
import {Trip} from "../../shared/model/trip.model";

@Component({
  selector: 'app-save-trip',
  templateUrl: './save-trip.component.html',
  styleUrls: ['./save-trip.component.css']
})
export class SaveTripComponent implements OnInit {

  title = '';
  trip: Trip;
  formGroup: FormGroup;
  formErrors = {};
  submitted = false;
  titleExist = false;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private aRoute: ActivatedRoute,
    private tripService: TripService,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
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

    this.formGroup.valueChanges.subscribe((data) => {
      this.formErrors = {};
      for (const field in data) {
        const control = this.formGroup.get(field);
        if (control && control.dirty && control.invalid) {
          this.formErrors[field] = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.trip = JSON.parse(this.aRoute.snapshot.queryParams?.['object'] ?? null);
    if (this.trip) {
      this.title = "Modificacion del Trip"
      this.fillFormWithEvent(this.trip);
    } else {
      this.title = "Creacion del Trip"
      this.fillFormWithIdEve();
    }
  }

  fillFormWithIdEve() {
    this.formGroup.setValue({
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

  fillFormWithEvent(existTrip: Trip) {
    this.formGroup.setValue({
      typeTrip: existTrip.typeTrip.toString(),
      statusTrip: existTrip.statusTrip.toString(),
      title: existTrip.title,
      photoTrip: existTrip.photoTrip,
      level: existTrip.level,
      transportType: existTrip.transportType.toString(),
      price: existTrip.price,
      general: existTrip.general,
      recommendation: existTrip.recommendation,
      safety: existTrip.safety,
      oneWayTrip: existTrip.oneWayTrip,
      returnTrip: existTrip.returnTrip,
    })
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
      activityList: this.trip ? this.trip.activityList : null,
      userList: this.trip ? this.trip.userList : null
    };
    if (this.trip)
      this.update(this.trip.title, trip)
    else
      this.create(trip)
  }

  private create(trip: Trip) {
    this.tripService.create(trip).subscribe({
      next: () => {
        this.toast.success('El Trip creado con exito!', 'Trip creado!')
        this.router.navigate(['/admin'])
      },
      error: () => this.toast.error('Error a la hora de crear un Trip', 'Error!'),
    });
  }

  private update(title: string, trip: Trip) {
    this.tripService.update(title, trip).subscribe({
      next: () => {
        this.toast.success('El Trip actualizado con exito!', 'Trip actualizado!')
        this.router.navigate(['/admin'])
      },
      error: () => this.toast.error('Error a la hora de actualizar el Trip', 'Error!'),
    });
  }
}
