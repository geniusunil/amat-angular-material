import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards3',
  templateUrl: './cards3.component.html',
  styleUrls: ['./cards3.component.css']
})
export class Cards3Component implements OnInit {
  @Input() titleicon;
  @Input() title;
  @Input() colorClass;
  @Input() icon1;
  @Input() icon2;
  @Input() icon3;
  @Input() icon4;
  @Input() amount1;
  @Input() amount2;
  @Input() amount3;
  @Input() amount4;
  @Input() subs1;
  @Input() subs2;
  @Input() subs3;
  @Input() subs4;
  
  constructor() { }

  ngOnInit() {
    // console.log("hi "+this.titleicon);
  }
  ngOnChanges() {
    if(this.titleicon) {
      // console.log(this.titleicon)
    }
  }
}
