import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})

export class ListPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tabService: TabService) { }

  ngOnInit(): void {
    
  }
}
  
