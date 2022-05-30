import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cost,
  Cost2,
  CostItem,
  Costs,
  ExchangeRates,
  PaymentCurrency,
} from '../core/models';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '48px' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CostsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public currentCurrency: PaymentCurrency;
  public currentExcangeRate: PaymentCurrency;
  private baseCurrency: PaymentCurrency & any;
  private exchangeRates: ExchangeRates;
  public costs: Costs;
  public expensesExpanded: boolean = null;
  public expensesColumns: string[] = [
    'Port Expenses',
    'Account code',
    'Quoted',
    'Screened',
    'Comment Length',
  ];
  public specificExpanded: boolean = null;
  public specificColumns: string[] = [
    'Port Specific',
    'Quoted',
    'Screened',
    'Comment Length',
  ];

  ngOnInit(): void {
    this.costs = this.route.snapshot.data['costs'];
    this.exchangeRates = this.route.snapshot.data['exchangeRates'];
    this.baseCurrency = this.costs.baseCurrency;
  }

  getExpenses(type: string) {
    return this.costs.costs.find((c) => c.name === type)?.costItems || [];
  }

  getCost(costs: Cost2[], type: string) {
    return costs.find((c) => c.type === type)?.amount || 0;
  }

  calculateCost(cost: number) {
    return (
      Math.round(
        (cost * this.currentCurrency.exchangeRate + Number.EPSILON) * 100
      ) / 100
    );
  }

  calculateBaseCost(cost: number) {
    return (
      Math.round(
        (cost * this.baseCurrency.exchangeRate + Number.EPSILON) * 100
      ) / 100
    );
  }

  calculateTotalCosts(costs: CostItem[], type: string) {
    return costs.reduce((acc, cur) => {
      const quoted = this.getCost(cur.costs, type);
      if (quoted) {
        return acc + quoted;
      }
      return acc;
    }, 0);
  }

  changeCurrency(currency: string) {
    this.currentCurrency = this.exchangeRates.paymentCurrencies.find(
      (c) => c.toCurrency === currency
    );
  }
}
