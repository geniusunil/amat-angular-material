import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol','position', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  email : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},

];