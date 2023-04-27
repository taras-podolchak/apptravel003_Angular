export interface Activity {
  id_doc: string;
  typeActivity: number;
  statusActivity: number;
  subtitle: string;
  photoActivity: string;
  wikiloc: string;
  complexity: number;
  hoursTotal: number;
  description: string;
  distance: number;
  slope: number;
  locationDeparture: string;
  locationArrival: string;
  dateDeparture: Date;
  dateArrival: Date;
  coordinatesDeparture: string;
  coordinatesArrival: string;
}
