import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destinations } from '../models/destinations.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
//private readonly http = Inject(HttpClient);
constructor(private http: HttpClient) { }

private baseUrl: string = 'http://localhost:8080/spacetourism/destinationsData';

getDestinations(): Observable<Destinations[]> {
  const url = this.http.get<Destinations[]>(this.baseUrl);
   return url;
}

}
