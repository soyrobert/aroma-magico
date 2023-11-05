import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from '../models/cafe';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private readonly URL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.URL);
  }
}
