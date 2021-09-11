import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LoansComponent } from './loans/loans.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path:'', component: SummaryComponent },
  { path:'navigator', loadChildren: () => import('./list-page/list-routing.module').then(mod => mod.ListRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
