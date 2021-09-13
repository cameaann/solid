import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';
import { TabComponent } from '../tab/tab.component';
import { TabDetailsComponent } from '../tab-details/tab-details.component';


const routes: Routes =[
  { path: ' ', component: ListPageComponent,
    children: [
      { path:' ', component: TabComponent,
        children:[
          { path: ' ', component: TabDetailsComponent}
          ]
      }
              ]     
  }]
 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
