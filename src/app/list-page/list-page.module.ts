import { NgModule } from "@angular/core";
import { ListPageComponent } from "./list-page.component";
import { TabComponent } from "../tab/tab.component";
import { ListRoutingModule } from "./list-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { TabDetailsComponent } from "../tab-details/tab-details.component";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ListPageComponent,
        TabComponent,
        TabDetailsComponent
        ],
    imports: [      
      ListRoutingModule,
      BrowserModule,
      AppRoutingModule,
      RouterModule
    ],
    exports:[
    ]
  })
export class ListPageModule {}