import { Component, OnInit,AfterContentInit,
  Directive,
  ElementRef,
  Input,
  Renderer2 } from '@angular/core';
//hi
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Directive({
  selector: '[appInvitingGuests]'
})
export class DashboardComponent implements OnInit {
  htmlToAdd;
  constructor(private _el: ElementRef,
    private _renderer2: Renderer2) { }
    public param: number;
    @Input() set appInvitingGuests(param: number) {
      this.param = param;
    }
  ngOnInit() {
    
  }
  ngAfterViewInit(){
/*     this.htmlToAdd = document.getElementById("overdue").innerHTML +"<div>hi</div>";
    // console.log(this.htmlToAdd);
    document.getElementById("overdue").innerHTML = this.htmlToAdd; */
  }
  ngAfterContentInit() {
    /* //out custom div element to be inserted into the angualar material mat tabs element
     const div = this._renderer2.createElement('div');
     const matTabBodyWrapper = this._el.nativeElement.parentNode.querySelector('.mat-tab-body-wrapper');
     const paramText = this._renderer2.createText(""+this.param);
  
     this._renderer2.appendChild(div, paramText);
  
     this._renderer2.insertBefore(matTabBodyWrapper.parentNode, div, matTabBodyWrapper); */
   }
}
