import { NgModule } from "@angular/core";
import { ListPageComponent } from "./list-page.component";
import { TabsComponent } from "../tabs/tabs.component";
import { TabComponent } from "../tab/tab.component";
import { ListRoutingModule } from "./list-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { ItemListComponent } from "../item-list/item-list.component";

@NgModule({
    declarations: [
        ListPageComponent,
        TabsComponent,
        TabComponent,
        ItemListComponent
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