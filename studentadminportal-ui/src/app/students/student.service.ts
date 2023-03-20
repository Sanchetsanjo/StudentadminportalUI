import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/api-models/student.model';
import { UpdateStudentRequest } from '../models/api-models/update-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private baseApiUrl ="https://localhost:7114";
baseApiUrl:string=environment.baseApiUrl;

  constructor(private http :HttpClient) { }

  getAllStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(this.baseApiUrl + '/Students');
  }

  GetStudentAsync(studentId:string):Observable<Student>{
    return this.http.get<Student>(this.baseApiUrl + '/Students/' + studentId)
  }

  UpdateStudent(studentId:string,StudentRequest:Student):Observable<Student>{

    const updateStudentRequest:UpdateStudentRequest={
      firstname:StudentRequest.firstname,
      lastname:StudentRequest.lastname,
      dateofBirth:StudentRequest.dateofBirth,
      email:StudentRequest.email,
      mobile:StudentRequest.mobile,
      genderId:StudentRequest.genderId,
      // physicalAddress:StudentRequest.Address.physicalAddress,
      // postalAddress:StudentRequest.Address.postalAddress

    }

    return this.http.put<Student>(this.baseApiUrl + '/Students/' + studentId, updateStudentRequest)
  }
}
