import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToListPage(){
    this.router.navigate(['/navigator'], { queryParams: { tab: '0' }});
  }

  goToSummaryPage(){
    this.router.navigate(['']);
  }

}
