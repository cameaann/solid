import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})

export class ListPageComponent implements OnInit {  
  private querySubscription = new Subscription();
  tab=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
          (queryParam: any) => {
            this.tab = queryParam['tab'];   
            console.log(this.tab)
        
        }
        );
  }

}
