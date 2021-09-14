import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as people from '../people-db.json';
import { Person } from '../person.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  active = false;
 
  people:Person[] = people.default.data;
  sortedPeople:Person[]=[];
  filter:string;

  constructor(private elRef: ElementRef) {
    this.filter = elRef.nativeElement.getAttribute('filter');
   }
  ngOnInit(): void {
    this.sortedPeople = this.people.filter(e => e.type === this.filter);
  }

}
