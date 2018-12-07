import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'home' },
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

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
