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
  { state: 'awesome', name: 'Leads', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 },
 { state: 'awesome', name: 'Estimates', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 },
 { state: 'awesome', name: 'Opportunities', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 },
 { state: 'awesome', name: 'Proposals', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 },
 { state: 'awesome', name: 'Goal Tracking', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 }

];
const support = [
  { state: 'awesome', name: 'Tickets', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Project', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
 },
 { state: 'awesome', name: 'Bugs', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'RMA Management', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
];
const accounting = [
  { state: 'awesome', name: 'Invoice', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Receive Payments', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Purchase Order', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Chart of Accounts', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Items', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Bank & Cash', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Transactions', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
];
const hr = [
  { state: 'awesome', name: 'Employees', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Departments', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Provident Fund', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Employee Award', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Leave Management', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Holiday', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Training', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Attendance', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Recuitement', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Payroll', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
];
const reports = [
  { state: 'awesome', name: 'Peojects Report', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Tasks Report', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Bugs Report', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Ticket Report', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Client Report', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Account Statement', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Profit & Loss', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Report by Date', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'All Transactions', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Report By Month', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
];
const utilities = [
  { state: 'awesome', name: 'User', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Automation', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Knowledge Base', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'File Manager', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Trash', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Policies & Roles', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Settings', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Performance', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Stock', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
];
const survey = [
  { state: 'awesome', name: 'Dashboard', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>" },
  { state: 'awesome', name: 'Survery Reports', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Report card', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Surveys', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Survey Template', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Location & Markets', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
},
{ state: 'awesome', name: 'Coupon verification', type: 'link', icon: 'home', sub: "<mat-menu #dashboard="+"matMenu"+"> <button mat-menu-item [matMenuTriggerFor]="+"vertebrates"+">Vertebrates</button><button mat-menu-item [matMenuTriggerFor]="+"invertebrates"+">Invertebrates</button></mat-menu>",
}
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
