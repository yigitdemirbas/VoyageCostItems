import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Costs, ExchangeRates } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(
      `${environment.apiUrl}exchange-rates.json`
    );
  }

  getCosts(): Observable<Costs> {
    return this.http.get<Costs>(`${environment.apiUrl}costs.json`);
  }
}
