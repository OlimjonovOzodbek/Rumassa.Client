import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private Http : HttpClient) { }
  GetUserById(id:string){
    this.Http.get<User>(environment.apiUrl+`Auth/GetById`)
  }
}
