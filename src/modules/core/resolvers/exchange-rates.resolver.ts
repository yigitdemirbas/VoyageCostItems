import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExchangeRates } from '../models';
import { ApiService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesResolver implements Resolve<ExchangeRates> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExchangeRates> {
    return this.apiService.getExchangeRates();
  }
}
