import { AfterContentInit, Component, ContentChildren,  QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  tab!: TabComponent;
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>

  constructor(private router: Router, route: ActivatedRoute) { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    console.log(activeTabs);
   
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }     
  }

  selectTab(tab:TabComponent) {
       // deactivate all tabs
       this.tabs.toArray().forEach(tab => (tab.active = false));          
       // activate the tab the user has clicked on.
       tab.active = true;
       this.router.navigate(['/navigator'], { queryParams: { tab: tab.id}});
  }

}
