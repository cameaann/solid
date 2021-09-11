import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input()
  person: Person;
 
  
  constructor() { 
    this.person = {'address':'', 'amount':0, 'company':'', 'email':'', 'id':'', 'name': {first:'', last:''}, 'phone':'', 'type':'income' };
    
  }

  ngOnInit(): void {
   
  }

}
