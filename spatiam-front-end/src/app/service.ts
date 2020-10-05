import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CAROL_DATA } from 'src/assets/carol/carol-log';
import { HOUSTON_DATA } from 'src/assets/houston/houston-log';
import { ROVER_DATA } from 'src/assets/rover/rover-log';

@Injectable({
  providedIn: 'root'
})
export class Service {


  constructor(
    private http: HttpClient
  ) {}

  getCarol(): Observable<object> {
    return of (CAROL_DATA);
  }

  getHouston(): Observable<object> {
    return of (HOUSTON_DATA);
  }

  getRover(): Observable<object> {
    return of (ROVER_DATA);
  }
}
