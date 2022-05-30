import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostsComponent } from './costs.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../core/shared/components';
import { CostsResolver, ExchangeRatesResolver } from '../core/resolvers';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: CostsComponent,
    resolve: {
      costs: CostsResolver,
      exchangeRates: ExchangeRatesResolver,
    },
  },
];

@NgModule({
  declarations: [CostsComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CostsModule {}
