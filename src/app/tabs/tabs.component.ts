import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabService } from '../tab.service';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit{
  activeTabs: TabComponent[]=[];
  private tabSubscription = new Subscription();
  tab!: TabComponent;
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>

  constructor(private router: Router, private tabService:TabService) { }

    ngAfterContentInit(): void {
    var tabId = this.tabService.getTab();
    
    var myTab = this.tabs.filter(tab => tab.id === tabId);
    this.selectTab(myTab[0]);
    this.activeTabs = this.tabs.filter(tab => tab.active);
   
   
    // if there is no active tab set, activate the first
    if (this.activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }    
  }

  selectTab(tabc:TabComponent) {
       // deactivate all tabs
       this.tabs.toArray().forEach(tab => (tab.active = false));
       // activate the tab the user has clicked on.
       tabc.active = true;
       this.router.navigate(['/navigator'], { queryParams: { tab: tabc.id}});
  }

}
