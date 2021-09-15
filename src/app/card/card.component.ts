import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string ="";
  @Input() cardText: string = "";
  @Input() tabId: number = 0;

  @Output() 
  cardClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  lookTab(){
    console.log(this.tabId);
    this.cardClicked.emit(this.tabId);
  }

}
