import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  matvalue = 0;
  
  displayedColumns: string[] = ['name', 'weight', 'symbol','position', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string ;
  position: string;
  weight: string;
  symbol: string;
  email : string;
  matvalue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: '54th Street - New Braunfels' ,  matvalue: 0 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', matvalue: 100 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels' ,  matvalue: 0 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', matvalue: 100 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels' ,  matvalue: 0 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', matvalue: 100 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels' ,  matvalue: 0 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', matvalue: 100 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels' ,  matvalue: 0 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},
  {name: '54th Street - New Braunfels', matvalue: 100 , weight: 'kasdasd', symbol: 'www.website.com',position : '(180) 123-4567', email : 'kartik@techspawn.com'},

];