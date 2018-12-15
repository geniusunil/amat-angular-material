// import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
// import { Router } from '@angular/router';
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { MenuItems } from '../../shared/menu-items/menu-items';
// import { AppHeaderComponent } from './header/header.component';
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
        width : '14.5vw',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '5.5vw',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      state('fullClosed', style({
        width: '0',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      state('fullOpened', style({
        width: '50vw',
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
        marginLeft : '14.5vw',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        marginLeft: '5.5vw',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      state('fullClosed', style({
        marginLeft: '0',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      state('fullOpened', style({
        marginLeft: '50vw',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ])
    
  ],
})
export class FullComponent implements OnDestroy, AfterViewInit,OnInit {
  mobileQuery: MediaQueryList;
  widthSidebarExpanded : number = 14.5;
  widthSidebarCollapsed : number = 5.5;
  widthSidebar : number = this.widthSidebarExpanded;
  private _mobileQueryListener: () => void;
  isOpen = true;
  isWide = false;
  // public iconsDisplay: string = AppSidebarComponent.iconsDisplayValue();
  @ViewChild(AppSidebarComponent) child;
  innerWidth: number;

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

  ngOnInit(){
    this.isWide = window.innerWidth>767;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isWide = window.innerWidth>767;
  }
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
