import {environment} from '@env';

export class EndPoints {
  static TRIPS = environment.REST_APPTRAVEL003_SPRING_BOOT + '/trips';
  static TYPE_TRIP = EndPoints.TRIPS + '/typeTrip';
  static TRIP_TITLE = EndPoints.TRIPS + '/title';
  static ACTIVITIES = environment.REST_APPTRAVEL003_SPRING_BOOT + '/activities';
  static USERS = environment.REST_APPTRAVEL003_SPRING_BOOT + '/users';

}
