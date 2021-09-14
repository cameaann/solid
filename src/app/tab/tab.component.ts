import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input()name: string = '';
  @Input()id: number = 0;
  @Input() active = false;

  // tab!: TabComponent;
 @ContentChild(ItemListComponent) tabs!:ItemListComponent;
  constructor(){    
  }
  
  ngOnInit(): void {
  
  }

}
