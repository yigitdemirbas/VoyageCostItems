import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExchangeRates } from 'src/modules/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  @Output() currenctSelectEvent = new EventEmitter<string>();
  public exchangeRates: ExchangeRates;
  public selectedRate: string;

  ngOnInit(): void {
    this.exchangeRates = this.route.snapshot.data['exchangeRates'];
    this.selectedRate = this.exchangeRates.paymentCurrencies.find(
      (c) => c.toCurrency === 'SGD'
    )?.toCurrency;
    this.changeCurrency();
  }

  changeCurrency() {
    this.currenctSelectEvent.emit(this.selectedRate);
  }
}
