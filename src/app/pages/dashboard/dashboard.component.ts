import { Component, OnInit,Directive, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Directive({
  selector: '[appGoWild]'
})
export class DashboardComponent implements OnInit {
  htmlToAdd;
  @ViewChild('test') test: ElementRef;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    // this.renderer.addClass(this.el.nativeElement, 'wild');
    this.renderer.addClass(this.test.nativeElement, 'yo');
    this.renderer.addClass(this.test.nativeElement, 'yo');
    this.renderer.setStyle(this.test.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
 //https://vahrushev.info/2018/05/26/how-to-modify-third-party-element-in-angular/
    console.log("ngafterviewinit");
  }
    
  
}
