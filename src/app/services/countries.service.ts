import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  apiURL: string = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiURL);
  }
}
