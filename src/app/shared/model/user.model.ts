export interface User {
  id_doc: string;
  typeUser: number;
  statusUser: number;
  name: string;
  nickname: string;
  surname: string;
  secondSurname: string;
  preferActivity: number[];
  phoneNumber: number;
  email: string;
  country: string;
  address: string;
  location: string;
  postalCode: number;
  documentType: number;
  documentNumber: string;
  nationality: string;
  photoUser: string;
  photoOrganization: string;
  entryDate: Date;
  leavingDate: Date;
  legalConditions: boolean;
  rememberPassword: boolean;
}
