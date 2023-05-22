import {Role} from "./role.model";

export interface User {
  token?: string;
  id_doc?: string;
  role: Role;
  statusUser: number;
  name: string;
  nickname?: string;
  surname: string;
  secondSurname?: string;
  preferActivity?: number[];
  phoneNumber?: number;
  email: string;
  password: string;
  country?: string;
  address?: string;
  location?: string;
  postalCode?: number;
  documentType?: number;
  documentNumber?: string;
  nationality?: string;
  photoUser?: string;
  photoOrganization?: string;
  entryDate: Date;
  leavingDate?: Date;
  legalConditions: boolean;
  rememberPassword: boolean;
}
