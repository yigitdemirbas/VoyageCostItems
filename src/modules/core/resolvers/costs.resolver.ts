import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Costs, ExchangeRates } from '../models';
import { ApiService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class CostsResolver implements Resolve<Costs> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Costs> {
    return this.apiService.getCosts();
  }
}
