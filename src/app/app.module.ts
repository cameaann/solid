import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as people from '../app/people-db.json';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPageComponent } from './list-page/list-page.component';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentsComponent } from './investments/investments.component';
import { SummaryComponent } from './summary/summary.component';
import { ListRoutingModule } from './list-page/list-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentsComponent,
    SummaryComponent,
    HeaderComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ListRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
