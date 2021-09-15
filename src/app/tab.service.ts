import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  tab:number = 0;

  constructor() { }

  public setTab(val:number){
    this.tab = val;
  }

  public getTab(){
    return this.tab;
  }
}
