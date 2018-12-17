import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}
// subs: string = "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>";
const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'calendar', name: 'Calender', type: 'link', icon: 'calendar' },
  { state: 'discussion', name: 'Discussion', type: 'link', icon: 'message-circle' },
  { state: 'mailbox', name: 'Mailbox', type: 'link', icon: 'mail' },
  { state: 'client', name: 'Client', type: 'link', icon: 'users' },
  { state: 'vendor', name: 'Vendor', type: 'link', icon: 'user' },
  { state: 'tasks', name: 'Tasks', type: 'link', icon: 'check-circle' },
  { state: 'sales', name: 'Sales', type: 'link', icon: 'shopping-cart' },
  { state: 'support', name: 'Support', type: 'link', icon: 'headphones' },
  { state: 'accounting', name: 'Accounting', type: 'link', icon: 'at-sign' },
  { state: 'hr', name: 'HR', type: 'link', icon: 'life-buoy' },
  { state: 'reports', name: 'Reports', type: 'link', icon: 'bar-chart-2' },
  { state: 'utilities', name: 'Utilities', type: 'link', icon: 'settings' },
  { state: 'survey', name: 'Survey', type: 'link', icon: 'clipboard' },
];

const sales = [
  { state: 'awesome', name: 'awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const support = [
  { state: 'awesome', name: '1awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const accounting = [
  { state: 'awesome', name: '2awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const hr = [
  { state: 'awesome', name: '3awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const reports = [
  { state: 'awesome', name: '4awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const utilities = [
  { state: 'awesome', name: '5awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const survey = [
  { state: 'awesome', name: '6awesome', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  
];
const foo:any[] = [sales,support,accounting,hr,reports,utilities,survey];
@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
  getSubMenuitem(subMenu): Menu[] {

    // console.log("log"+subMenu);
    if(subMenu=='sales'){
      return foo[0];
    }
    else if(subMenu == 'support'){
      return foo[1];
    }
    else if(subMenu == 'accounting'){
      return foo[2];
    }
    else if(subMenu == 'hr'){
      return foo[3];
    }
    else if(subMenu == 'reports'){
      return foo[4];
    }
    else if(subMenu == 'utilities'){
      return foo[5];
    }
    else if(subMenu == 'survey'){
      return foo[6];
    }
    
    
  }
}
