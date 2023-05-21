import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable, of} from "rxjs";
import {User} from "../model/user.model";
import {environment} from "@env";
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from "rxjs/operators";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static END_POINT = environment.REST_USER + '/users/token';
  private user: User;

  constructor(private httpService: HttpService, private router: Router) {
  }

  register(user: User): Observable<User> {
    return new Observable<User>();
  }

  login(email: string, password: string): Observable<User> {
    return this.httpService.authBasic(email, password)
      .post(AuthService.END_POINT)
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.phoneNumber = jwtHelper.decodeToken(jsonToken.token).user;  // secret key is not necessary
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;
          return this.user;
        })
      );
  }

  logout(): void {
    this.user = undefined;
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return true;
    // return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }


}
