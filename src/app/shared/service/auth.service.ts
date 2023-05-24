import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {environment} from "@env";
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Role} from "../model/role.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static END_POINT_REGISTER = environment.REST_USER + '/users';
  static END_POINT_LOGIN = environment.REST_USER + '/users/token';
  private user: User;

  constructor(private httpService: HttpService, private router: Router) {
  }

  register(user: User): Observable<User> {
    return this.httpService
      .post(AuthService.END_POINT_REGISTER, user)
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.email = jwtHelper.decodeToken(jsonToken.token).email;  // secret key is not necessary
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;
          return this.user;
        })
      );
  }

  login(email: string, password: string): Observable<User> {
    return this.httpService.authBasic(email, password)
      .post(AuthService.END_POINT_LOGIN)
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.email = jwtHelper.decodeToken(jsonToken.token).email;  // secret key is not necessary
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
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  getName(): string {
    return this.user ? this.user.name : '???';
  }

  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.includes(this.user.role);
  }

  isAdmin(): boolean {
    return this.hasRoles([Role.ADMIN]);
  }
}
