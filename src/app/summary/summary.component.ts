import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  constructor(private router: Router, private tabService: TabService) { }
  ngOnInit(): void {}

  goToTab(val:number){
    this.tabService.setTab(val);
    this.router.navigate(['/navigator'], { queryParams: { tab: val }});
  }

  onCardClicked(e:number){
    this.goToTab(e);
  }

}
