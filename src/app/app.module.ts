import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListPageModule } from './list-page/list-page.module';
import { TabService } from './tab.service';
import { HeadingCardComponent } from './heading-card/heading-card.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HeaderComponent,
    HeadingCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ListPageModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
