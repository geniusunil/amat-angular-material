import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'pages', name: 'Dashboard', type: 'link', icon: 'home' },
  { state: 'pages', name: 'Calender', type: 'link', icon: 'calendar_today' },
  { state: 'pages', name: 'Discussion', type: 'link', icon: 'av_timer' },
  { state: 'pages', name: 'Mailbox', type: 'link', icon: 'mail' },
  { state: 'pages', name: 'Client', type: 'link', icon: 'people' },
  { state: 'pages', name: 'Vendor', type: 'link', icon: 'person' },
  { state: 'pages', name: 'Tasks', type: 'link', icon: 'check_circle' },
  { state: 'pages', name: 'Sales', type: 'link', icon: 'shopping_cart' },
  { state: 'pages', name: 'Dashboard', type: 'link', icon: 'home' },
  { state: 'pages', name: 'Calender', type: 'link', icon: 'calendar_today' },
  { state: 'pages', name: 'Discussion', type: 'link', icon: 'av_timer' },
  { state: 'pages', name: 'Mailbox', type: 'link', icon: 'mail' },
  { state: 'pages', name: 'Client', type: 'link', icon: 'people' },
  { state: 'pages', name: 'Vendor', type: 'link', icon: 'person' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
