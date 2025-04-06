import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destinations } from '../models/destinations.model';
import { Crew } from '../models/crew.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private readonly http = Inject(HttpClient);
constructor(private http: HttpClient) { }

private baseUrl: string = 'http://localhost:8080/spacetourism/';

getDestinations(): Observable<Destinations[]> {
  const url = this.http.get<Destinations[]>(`${this.baseUrl}/${'destinationsData'}`);
   return url;
}

getCrewData(): Observable<Crew[]> {
  const url = this.http.get<Crew[]>(`${this.baseUrl}/${'CrewData'}`);
   console.log('crew', url);
   return url;
  }

}
