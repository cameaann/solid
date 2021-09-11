import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncomeComponent } from '../income/income.component';
import { InvestmentsComponent } from '../investments/investments.component';
import { LoansComponent } from '../loans/loans.component';
import { OutcomeComponent } from '../outcome/outcome.component';
import { ListPageComponent } from './list-page.component';

const routes: Routes =[
  { path:'', component: ListPageComponent },
  // { path:'0', component: IncomeComponent },
  // { path:'1', component: OutcomeComponent },
  // { path:'2', component: LoansComponent },
  // { path:'3', component: InvestmentsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
