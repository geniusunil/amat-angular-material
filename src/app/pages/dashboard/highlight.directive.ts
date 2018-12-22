import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef,private _renderer2: Renderer2) {
    console.log(el.nativeElement);
    el.nativeElement.style.backgroundColor = 'yellow';
    const div = this._renderer2.createElement('div');
    console.log(el.nativeElement.parentNode);
    const matTabBodyWrapper = el.nativeElement.querySelector('.mat-tab-header');
    const paramText = this._renderer2.createText("1");
 
    this._renderer2.appendChild(div, paramText);
    console.log(div);
    this._renderer2.addClass(el.nativeElement, 'wild');
    this._renderer2.appendChild(el.nativeElement, div );
 }

}
