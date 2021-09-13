import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import * as people from '../people-db.json';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {
  people: Person[] = people.default.data;  
  sortedPeople: Person[] = [];
  tab = 0;

  id: number | undefined;
  private querySubscription = new Subscription();

  constructor(private route: ActivatedRoute) {   
  }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.tab = queryParam['tab'];
        this.sortedPeople = this.filterPeople(this.tab);  
      }
    );
  }
    filterPeople(val:number){
      if(val==0){
        return this.people.filter(e => e.type === "income");
      }
      else if (val==1){
        return this.people.filter(e => e.type === "outcome");
      }
      else if (val==2){
        return this.people.filter(e => e.type === "loan");
      }
      else{
        return this.people.filter(e => e.type === "investment");
      }
     
  }


  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
