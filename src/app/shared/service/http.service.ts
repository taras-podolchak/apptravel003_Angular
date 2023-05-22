import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Error} from '../model/error.model';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  static CONNECTION_REFUSE = 0;
  static UNAUTHORIZED = 401;

  private headers = new HttpHeaders();
  private params = new HttpParams();
  private responseType?: string;
  private successfulNotification: string | undefined;
  private errorNotification: string | undefined;

  constructor(private http: HttpClient,
              private toast: ToastrService,
              private router: Router) {
    this.resetOptions();
  }

  param(key: string, value: string): HttpService {
    if (value != null) {
      this.params = this.params.append(key, value); // This class is immutable
    }
    return this;
  }

  error(notification: string): HttpService {
    this.errorNotification = notification;
    return this;
  }

  post(endpoint: string, body?: object): Observable<any> {
    return this.http
      .post(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  get(endpoint: string): Observable<any> {
    return this.http
      .get(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  authBasic(email: string, password: string): HttpService {
    return this.header('Authorization', 'Basic ' + btoa(email + ':' + password));
  }

  header(key: string, value: string): HttpService {
    if (value != null) {
      this.headers = this.headers.append(key, value); // This class is immutable
    }
    return this;
  }

  private resetOptions(): void {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

  private createOptions(): any {
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    this.resetOptions();
    return options;
  }

  private extractData(response: any): any {
    if (this.successfulNotification) {
      this.toast.warning(this.successfulNotification, '');
      this.successfulNotification = undefined;
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/pdf') !== -1) {
        const blob = new Blob([response.body], {type: 'application/pdf'});
        window.open(window.URL.createObjectURL(blob));
      } else if (contentType.indexOf('application/json') !== -1) {
        return response.body; // with 'text': JSON.parse(response.body);
      }
    } else {
      return response;
    }
  }

  private showError(notification: string): void {
    if (this.errorNotification) {
      this.toast.error(this.errorNotification, 'Error');
      this.errorNotification = undefined;
    } else {
      this.toast.error(notification, 'Error');
    }
  }

  private handleError(response: any): any {
    let error: Error;
    if (response.status === HttpService.UNAUTHORIZED) {
      this.showError('Unauthorized');
      this.router.navigate(['']).then();
      return EMPTY;
    } else if (response.status === HttpService.CONNECTION_REFUSE) {
      this.showError('Connection Refuse');
      return EMPTY;
    } else {
      try {
        error = response.error; // with 'text': JSON.parse(response.error);
        this.showError(error.error + ' (' + response.status + '): ' + error.message);
        return throwError(() => error);
      } catch (e) {
        this.showError('Not response');
        return throwError(() => response.error);
      }
    }
  }

}
