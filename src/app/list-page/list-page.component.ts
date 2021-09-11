import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';
import * as people from '../people-db.json';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  people:Person[] = people.default.data;
  sortPeople:Person[]=[];
  typeSort:String = "";
  active = 0;
  
  
  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }

  filterOutcome(val:String){
    this.sortPeople = this.people.filter(e => e.type === val);
     
  }

  getTypeTab(val:number){
    if(val==0){
      this.typeSort = "income";
      this.sortPeople = this.people.filter(e => e.type === "income");
    }
    else if(val==1){
      this.typeSort = "outcome";
      this.sortPeople = this.people.filter(e => e.type === "outcome");
    }
    else if(val==2){
      this.typeSort = "loan";
      this.sortPeople = this.people.filter(e => e.type === "loan");
    }
    else{
      this.typeSort = "investment";
      this.sortPeople = this.people.filter(e => e.type === "investment");
    }
  } 

}
