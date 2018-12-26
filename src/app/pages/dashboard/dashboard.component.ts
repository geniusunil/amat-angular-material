import { Component, OnInit,AfterContentInit,
  Directive,
  Renderer2,
SecurityContext } from '@angular/core';
import { FeatherIconsPipe } from '../../feather-pipe';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
//hi
/* describe('SanitiseHtmlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new FeatherIconsPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  })); 
}); */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  htmlToAdd;
  constructor(
    private _renderer2: Renderer2,
    private sanitizer:DomSanitizer) { }
   
  ngOnInit() {
    
  }
  ngAfterViewInit(){

  }
  ngAfterContentInit() {
    let pipe;
     const div = this._renderer2.createElement('div');
     const span = this._renderer2.createElement('span');
     console.log(this.sanitizer);
    pipe = new FeatherIconsPipe(this.sanitizer);
     let name =this.sanitizer.sanitize(SecurityContext.HTML,pipe.transform('printer'));
     let fileMinus =this.sanitizer.sanitize(SecurityContext.HTML,pipe.transform('file-minus'));
     let pdf =this.sanitizer.sanitize(SecurityContext.HTML,pipe.transform('file-minus'));
     console.log(name);
     let final= name + " | "+name + " Selected &nbsp;&nbsp; |" + fileMinus + " | " + fileMinus + " |  &nbsp;&nbsp; Visibility";
     this._renderer2.setProperty(span, 'innerHTML', final);
    // const matTabBodyWrapper = this._el.nativeElement.parentNode.querySelector('.mat-tab-body-wrapper');
    const matTabBodyWrapper = (document.getElementById('overdue')).getElementsByClassName('mat-tab-body-wrapper')[0];
const mat=(document.getElementById('overdue')).getElementsByClassName('mat-tab-header')[0];
this._renderer2.setStyle(mat,'border','none');
    const paramText = this._renderer2.createText("");
 
    this._renderer2.appendChild(div, span);
    this._renderer2.addClass(div,'overdueMeetingsInsert');
    this._renderer2.addClass(span,'overdueMeetingsInsertSpan');
    this._renderer2.insertBefore(matTabBodyWrapper.parentNode, div,matTabBodyWrapper);
    //  console.log(matTabBodyWrapper);
     this._renderer2.setStyle(matTabBodyWrapper,'border','1px solid rgba(0, 0, 0, 0.12)');
   }
}
