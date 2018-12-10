import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit,
  Renderer2
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
  state : string = 'sales';
  stateChange(newState) {
    // console.log("i got "+newState);
    this.state = newState;
    
  }
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
    var elements = document.getElementsByClassName("btnwrap");
    [].forEach.call(elements, function (el) {
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
    var elements = document.getElementsByClassName("btnwrap");
    [].forEach.call(elements, function (el) {
      el.style.display = "none";
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private ren: Renderer2
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  hostClickHandler(item: string) {
    alert(item);
  }

  /* following content is copied from 
  https://stackblitz.com/edit/mat-nested-menu-yclrmd?embed=1&file=app/nested-menu-example.html
  https://stackoverflow.com/questions/53618333/how-to-open-and-close-angular-mat-menu-on-hover/53618962#53618962
  */
  
  menuenter() {
    /* this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    } */
  }

  menuLeave(trigger, button) {
    /* setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80) */
  }

  menu2enter() {
    /* this.isMatMenu2Open = true; */
  }

  menu2Leave(trigger1, trigger2, button) {
    /* setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100) */
  }

  buttonEnter(trigger,button,newState) {
    this.stateChange(newState);
    trigger.openMenu();
    this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-focused');
    this.ren.addClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
    /* setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu()
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu()
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    }) */
  }

  buttonLeave(trigger,button) {
    trigger.closeMenu();
    this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-mouse-focused');
    /* setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100)*/
  } 
}
