import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { AppHeaderComponent } from './header/header.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: [],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width : '225px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '75px',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
    trigger('marginLeft', [
      // ...
      state('open', style({
        marginLeft : '225px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        marginLeft: '75px',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
    trigger('widthInner', [
      // ...
      state('open', style({
        width : '245px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '87px',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
    
  ],
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  widthSidebarExpanded : number = 225;
  widthSidebarCollapsed : number = 75;
  widthSidebar : number = this.widthSidebarExpanded;
  private _mobileQueryListener: () => void;
  isOpen = true;
  // public iconsDisplay: string = AppSidebarComponent.iconsDisplayValue();
  @ViewChild(AppSidebarComponent) child;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    // public sidebar: AppSidebarComponent
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // console.log("debugging");
    // console.log(sidebar.getIconsDisplay());
    // this.iconsDisplay = sidebar.getIconsDisplay();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
  sidebarToggle(){
    if(this.widthSidebar == this.widthSidebarExpanded){
      this.widthSidebar = this.widthSidebarCollapsed;
      // AppSidebarComponent.setIconsDisplayBlock;
      // console.log("hi"+this.iconsDisplay);
      this.child.collapse();
      this.isOpen = false;
    }
    else{
      this.widthSidebar = this.widthSidebarExpanded;
      // AppSidebarComponent.setlogoDisplayNone;
      this.child.expand();
      this.isOpen = true;
    }
  }
}
