import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'home' },
  { state: 'calendar', name: 'Calender', type: 'link', icon: 'calendar_today' },
  { state: 'discussion', name: 'Discussion', type: 'link', icon: 'av_timer' },
  { state: 'mailbox', name: 'Mailbox', type: 'link', icon: 'mail' },
  { state: 'client', name: 'Client', type: 'link', icon: 'people' },
  { state: 'vendor', name: 'Vendor', type: 'link', icon: 'person' },
  { state: 'tasks', name: 'Tasks', type: 'link', icon: 'check_circle' },
  { state: 'sales', name: 'Sales', type: 'link', icon: 'shopping_cart' },
  { state: 'support', name: 'Support', type: 'link', icon: 'headset_mic' },
  { state: 'accounting', name: 'Accounting', type: 'link', icon: 'alternate_email' },
  { state: 'hr', name: 'HR', type: 'link', icon: 'person_outline' },
  { state: 'reports', name: 'Reports', type: 'link', icon: 'assessment' },
  { state: 'utilities', name: 'Utilities', type: 'link', icon: 'settings' },
  { state: 'survey', name: 'Survey', type: 'link', icon: 'assignment_turned_in' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
