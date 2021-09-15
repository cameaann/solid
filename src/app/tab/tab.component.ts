import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemListComponent } from '../item-list/item-list.component';
import { TabService } from '../tab.service';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input()name: string = '';
  @Input()id: number = 0;
  @Input() active = false;

 @ContentChild(ItemListComponent) tabs!:ItemListComponent;
  constructor(private tabService: TabService){    
  }
  
  ngOnInit(): void {
  
  }

}
