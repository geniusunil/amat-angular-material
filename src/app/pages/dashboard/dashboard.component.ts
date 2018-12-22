import { Component, OnInit } from '@angular/core';
//hi
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  htmlToAdd;
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.htmlToAdd = document.getElementById("overdue").innerHTML +"<div>hi</div>";
    // console.log(this.htmlToAdd);
    document.getElementById("overdue").innerHTML = this.htmlToAdd;
  }

}
