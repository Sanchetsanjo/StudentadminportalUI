
import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student{
  id:string,
  firstname:string,
  lastname:string,
  dateofBirth:string,
  email:string,
  mobile:number,
  profileimageUrl:string,
  genderId:string,
  gender:Gender,
  Address:Address
}
