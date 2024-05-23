import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getallProducts(pageIndex: number, size: number): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.apiUrl + `Products/GetAll?pageIndex=${pageIndex}&size=${size}`)
  }
}
