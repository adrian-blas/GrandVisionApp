import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { OpenWeather } from '../models/open-weather.model';


@Injectable()
export class OpenWeatherService {

  url = environment.urlApiOpenWeather;
  apiKey = environment.apiKeyPoenWeather;
  openWeather: OpenWeather;

  constructor( private http: HttpClient ) { }

  getWeather(): Observable<OpenWeather[]>{
    const url = `${this.url}box/city?bbox=12,32,15,37,10&appid=${this.apiKey}`;

    return this.http.get( url ).pipe(
      map( (resp: any) => {
        return new Array( resp );
      }),
      catchError( (err: any) => {
        return throwError(err);
      })
    );

  }

}
