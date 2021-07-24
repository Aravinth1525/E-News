import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=80332802e3344e8fa8b525bee0609f34'

  scienceurl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=80332802e3344e8fa8b525bee0609f34"

  sportsurl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=80332802e3344e8fa8b525bee0609f34"

  healthurl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=80332802e3344e8fa8b525bee0609f34"

  businessurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=80332802e3344e8fa8b525bee0609f34"

  topheading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  science():Observable<any>
  {
    return this._http.get(this.scienceurl)
  }

  sports():Observable<any>
  {
    return this._http.get(this.sportsurl)
  }

  health():Observable<any>
  {
    return this._http.get(this.healthurl)
  }

  business():Observable<any>
  {
    return this._http.get(this.businessurl)
  }
}
