import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { categoryModel } from '../../interfaces/categoryModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  api = `${environment.apiUrl}Category`;

  constructor(private http : HttpClient) { }

  getAllCategories() : Observable<categoryModel[]>
  {
    return this.http.get<categoryModel[]>(`${this.api}/GetAll`)
  }

}
