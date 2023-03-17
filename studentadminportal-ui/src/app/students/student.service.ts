import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/api-models/student.model';

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
}
