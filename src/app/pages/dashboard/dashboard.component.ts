import { Component, OnInit,AfterContentInit,
  Directive,
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
  constructor(
    private _renderer2: Renderer2) { }
   
   
  ngOnInit() {
    
  }
  ngAfterViewInit(){

  }
  ngAfterContentInit() {
    
     const div = this._renderer2.createElement('div');
    // const matTabBodyWrapper = this._el.nativeElement.parentNode.querySelector('.mat-tab-body-wrapper');
    const matTabBodyWrapper = (document.getElementById('overdue')).getElementsByClassName('mat-tab-body-wrapper')[0];
const mat=(document.getElementById('overdue')).getElementsByClassName('mat-tab-header')[0];
this._renderer2.setStyle(mat,'border','none');
    const paramText = this._renderer2.createText("hi");
 
    this._renderer2.appendChild(div, paramText);
 
    this._renderer2.insertBefore(matTabBodyWrapper.parentNode, div,matTabBodyWrapper);
    //  console.log(matTabBodyWrapper);
     this._renderer2.setStyle(matTabBodyWrapper,'border','1px solid rgba(0, 0, 0, 0.12)');
   }
}
