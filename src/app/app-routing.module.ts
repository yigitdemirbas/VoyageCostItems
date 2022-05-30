import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'costs',
    pathMatch: 'full',
  },
  {
    path: 'costs',
    loadChildren: () =>
      import('../modules/costs/costs.module').then((m) => m.CostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
