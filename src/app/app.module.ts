import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListPageModule } from './list-page/list-page.module';



@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HeaderComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
