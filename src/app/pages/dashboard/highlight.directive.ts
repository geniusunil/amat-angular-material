import { Directive, ElementRef, Renderer2 } from '@angular/core';
//hi
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef,private _renderer2: Renderer2) {
    console.log(el.nativeElement);
    el.nativeElement.style.backgroundColor = 'yellow';
    const div = this._renderer2.createElement('div');
    console.log(el.nativeElement.parentNode);
    const matTabBodyWrapper =el.nativeElement.getElementsByClassName('mat-tab-header');
    const matTabBodyWrapper0= matTabBodyWrapper[0];
    console.log(matTabBodyWrapper0);
    const paramText = this._renderer2.createText("1");
 
    this._renderer2.appendChild(div, paramText);
    console.log(matTabBodyWrapper);
    this._renderer2.addClass(el.nativeElement, 'wild'); // use  ngAfterContentInit()
    // this._renderer2.insertBefore(matTabBodyWrapper0.parentNode, div, matTabBodyWrapper);
 }

}
