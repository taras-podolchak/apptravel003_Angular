import {Activity} from "./activity.model";
import {User} from "./user.model";

export interface Trip {
  typeTrip: number;
  statusTrip: number;
  title: string;
  photoTrip: string;
  level: number;
  transportType: number;
  price: number;
  general: string;
  recommendation: string;
  safety: string;
  oneWayTrip: number;
  returnTrip: number;
  activityList: Activity[];
  userList: User[];
}
