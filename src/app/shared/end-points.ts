import {environment} from '@env';

export class EndPoints {
  static TRIPS = environment.REST_CORE + '/trips';
  static ACTIVITIES = environment.REST_CORE + '/activities';
  static USERS = environment.REST_CORE + '/users';

}
