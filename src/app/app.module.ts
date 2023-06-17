import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TripModule} from "./trip/trip.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import {AdminModule} from "./admin/admin.module";
import {SharedModule} from "./shared/shared.module";
import {NavBarComponent} from "./shared/components/nav-bar/nav-bar.component";
import {AuthService} from "./shared/service/auth.service";
import {HttpService} from "./shared/service/http.service";
import {RoleGuardService} from './shared/service/role-guard.service';
import {TokenInterceptor} from "./shared/service/token.interceptor";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TripModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    }),
    ToastNoAnimationModule,
    AdminModule,
    SharedModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [AuthService,
    HttpService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
