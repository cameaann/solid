import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css']
})
export class TabDetailsComponent implements OnInit {
  
  @Input()
  person: Person;

  constructor() { 
    this.person = { 'address': '', 'amount': 0, 'company': '', 'email': '', 'id': '', 'name': { first: '', last: '' }, 'phone': '', 'type': 'income' };
  }

  ngOnInit(): void {
  }

}
