

import { Component } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})


export class AppHeaderComponent {
  public toggleSearchBar:boolean = false;
  // names = [1,2,3];
  constructor(){
    
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'ALL'},
    {value: 'pizza-1', viewValue: 'Accounts'},
    {value: 'tacos-2', viewValue: 'Contacts'},
    {value: 'tacos-3', viewValue: 'Dashboard'}
  ];
  selectedValue: string = this.foods[0].value;
}
