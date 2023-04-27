import {Activity} from "./activity.model";
import {User} from "./user.model";

export interface Trip {
  id_doc: string;
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
  activityEntityList?: Activity[];
  userEntityList?: User[];
}
