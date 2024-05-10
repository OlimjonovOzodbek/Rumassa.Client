import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getallNews(pageIndex: number, size: number): Observable<News[]> {
    return this.httpClient.get<News[]>(this.apiUrl + `News/GetAll?pageIndex=${pageIndex}&size=${size}`)
  }

  // getPictureByPath(path:string):Observable<any>{
  //   return this.httpClient.get<any>(this.apiUrl+`SendPicture?path=${path}`)
  // }
}
