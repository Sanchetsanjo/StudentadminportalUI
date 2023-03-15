
import { Address } from "./Adress.model";
import { Gender } from "./gender.model";

export interface Student{
  id:string,
  Firstname:string,
  Lastname:string,
  Datofbirth:string,
  Email:string,
  Mobile:number,
  Profileimageurl:string,
  Genderid:string,
  Gender:Gender,
  Adress:Address

}
