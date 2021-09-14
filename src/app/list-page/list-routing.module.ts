import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tab/tab.component';
import { ItemListComponent } from '../item-list/item-list.component';


const routes: Routes = [
  {
    path: ' ', component: ListPageComponent,
    children: [
      {  path: ' ', component: TabsComponent,
    children:[
      {  path: ' ', component: TabComponent,
    children:[
      {  path: ' ', component: ItemListComponent }
      ] },
    ] }
        ]
      }
    ]
 

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class ListRoutingModule { }
