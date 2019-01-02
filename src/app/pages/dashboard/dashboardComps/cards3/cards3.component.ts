import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards3',
  templateUrl: './cards3.component.html',
  styleUrls: ['./cards3.component.css']
})
export class Cards3Component implements OnInit {
  @Input() titleicon;
  titleicons = 'home';
  constructor() { }

  ngOnInit() {
    console.log("hi "+this.titleicon);
  }
  ngOnChanges() {
    if(this.titleicon) {
      console.log(this.titleicon)
    }
  }
}
