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
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  logoDisplay: string = 'none';
  private _mobileQueryListener: () => void;

  collapse() {
    this.logoDisplay = 'block';
    var elements = document.getElementsByClassName("toHide");
    [].forEach.call(elements, function (el) {
      el.style.display = "none";
    });
    var elements = document.getElementsByClassName("show");
    [].forEach.call(elements, function (el) {
      el.style.width = "inherit";
      el.style.fontSize = "36px";
      el.style.height = "36px";
    });
    document.getElementById("utiliko").style.font = "600 20px/24px 'Open Sans', sans-serif";
    var elements = document.getElementsByClassName("nav");
    [].forEach.call(elements, function (el) {
      el.style.padding = "0 5px";
      el.classList.add('nav-small');
    });

    var elements = document.getElementsByClassName("sidebarIcon");
    [].forEach.call(elements, function (el) {
      el.style.width = "100%";
      el.style.marginRight = "0";
    });

    var x = document.querySelectorAll(".sidebarIcon svg");
    [].forEach.call(x, function (el) {
      el.style.height = "27px";
      el.style.width = "27px"
      el.style.margin = "auto";
      el.style.display = "block";
    });

  }

  expand() {
    this.logoDisplay = 'none';
    var elements = document.getElementsByClassName("toHide");
    [].forEach.call(elements, function (el) {
      el.style.display = "block";
    });
    var elements = document.getElementsByClassName("show");
    [].forEach.call(elements, function (el) {

      el.style.fontSize = "30px";
      el.style.height = "30px";
    });

    document.getElementById("utiliko").style.font = "600 30px/24px 'Open Sans', sans-serif";
    var elements = document.getElementsByClassName("nav");
    [].forEach.call(elements, function (el) {
      el.style.padding = "0 5px";
      el.classList.remove('nav-small');

    });

    var elements = document.getElementsByClassName("sidebarIcon");
    [].forEach.call(elements, function (el) {
      el.style.width = "initial";
    });

    var x = document.querySelectorAll(".sidebarIcon svg");
    [].forEach.call(x, function (el) {
      el.style.height = "18px";
      el.style.width = "18px";
      el.style.margin = "0 8px";
     
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
