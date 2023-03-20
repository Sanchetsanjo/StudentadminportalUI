import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gender } from '../models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http :HttpClient) { }
  getGenderList(): Observable<Gender[]>{

    return this.http.get<Gender[]>(this.baseApiUrl+ '/gender');
  }
}
