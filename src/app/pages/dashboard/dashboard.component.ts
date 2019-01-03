import {
  Component, OnInit, AfterContentInit,
  Directive,
  Renderer2,
  SecurityContext,
  ViewChild
} from '@angular/core';
import { FeatherIconsPipe } from '../../feather-pipe';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material';
import { Cards3Component } from './dashboardComps/cards3/cards3.component'

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  htmlToAdd;
  constructor(
    private _renderer2: Renderer2,
    private sanitizer: DomSanitizer) { }
  @ViewChild(Cards3Component) child;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Select Pipeline' },
    { value: 'pizza-1', viewValue: 'Accounts' },
    { value: 'tacos-2', viewValue: 'Contacts' },
    { value: 'tacos-3', viewValue: 'Dashboard' }
  ];
  selectedValue: string = this.foods[0].value;
  ngOnInit() {

  }
  ngAfterViewInit() {

  }
  ngAfterContentInit() {
    let pipe;
    const div = this._renderer2.createElement('div');
    const span = this._renderer2.createElement('span');
    // console.log(this.sanitizer);
    pipe = new FeatherIconsPipe(this.sanitizer);
    let name = this.sanitizer.sanitize(SecurityContext.HTML, pipe.transform('printer'));
    let fileMinus = this.sanitizer.sanitize(SecurityContext.HTML, pipe.transform('file-minus'));
    let pdf = this.sanitizer.sanitize(SecurityContext.HTML, pipe.transform('file-minus'));
    // console.log(name);
    let final = "<button>"+name + "</button> | <button>" + name + "</button> Selected &nbsp;&nbsp; | <button>" + fileMinus + "</button> | <button>" + fileMinus + "</button> |  &nbsp;&nbsp; <button>Visibility</button>";
    this._renderer2.setProperty(span, 'innerHTML', final);
    // const matTabBodyWrapper = this._el.nativeElement.parentNode.querySelector('.mat-tab-body-wrapper');
    const matTabBodyWrapper = (document.getElementById('overdue')).getElementsByClassName('mat-tab-body-wrapper')[0];
    const mat = (document.getElementById('overdue')).getElementsByClassName('mat-tab-header')[0];
    this._renderer2.setStyle(mat, 'border', 'none');
    const paramText = this._renderer2.createText("");

    this._renderer2.appendChild(div, span);
    this._renderer2.addClass(div, 'overdueMeetingsInsert');
    this._renderer2.addClass(span, 'overdueMeetingsInsertSpan');
    this._renderer2.insertBefore(matTabBodyWrapper.parentNode, div, matTabBodyWrapper);
    //  console.log(matTabBodyWrapper);
    this._renderer2.setStyle(matTabBodyWrapper, 'border', '1px solid rgba(0, 0, 0, 0.12)');
  }

  myDataArray = new MatTableDataSource<PerElement>(MYPROJECTS_DATA);
  displayedcolumns: string[] = ['projectname', 'client'];
  DataArray = new MatTableDataSource<PrElement>(MYTASKS_DATA);
  displaycolumns: string[] = ['taskname', 'client'];
  Dataarray = new MatTableDataSource<Prelement>(ACCOUNT_DATA);
  discolumns: string[] = ['accountname', 'balance'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  Dataarray1 = new MatTableDataSource<PeriodicElement1>(AGREEMENTS_DATA);
  discolumns1: string[] = ['clientname', 'type', 'status'];
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  //barchart

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', type: 'line', backgroundColor: "rgba(51,51,51,0.5)", fill: false, lineTension: 0 },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' },
  ];

  // events


  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomizeLine(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com', position: '(180) 123-4567', email: 'kartik@techspawn.com' },
  { name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com', position: '(180) 123-4567', email: 'kartik@techspawn.com' },

];
export interface PerElement {
  projectname: string;
  client: string;
  matvalue: number;
  projectdate: string;
  overdue: boolean;
}

const MYPROJECTS_DATA: PerElement[] = [
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
];
export interface PrElement {
  taskname: string;
  client: string;
  matvalues: number;
  projectdate: string;
  overdues: boolean;
}

const MYTASKS_DATA: PrElement[] = [
  { taskname: 'Atach Create kela me', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'new task (pbx)', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: false },
  { taskname: 'PBX Test 2', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'test 54th', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav ', overdues: true },
  { taskname: 'Atach Create kela me', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'Test mail', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'task issue', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'task2 mileston 2', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'new task (pbx)', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: false },
  { taskname: 'PBX Test 2', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'test 54th', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav ', overdues: true },
  { taskname: 'Atach Create kela me', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'Test mail', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'task issue', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'task2 mileston 2', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { taskname: 'new task (pbx)', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: false },
  { taskname: 'PBX Test 2', matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },

];
export interface Prelement {
  accountname: string;
  balance: string;
  accounts: string;

}

const ACCOUNT_DATA: Prelement[] = [
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
  { accountname: 'Bank Account', accounts: 'bankaccount', balance: '$19660.38' },
];
export interface PeriodicElement1 {
  clientname: string;
  type: string;
  date: string;
  status: boolean;
}

const AGREEMENTS_DATA: PeriodicElement1[] = [
  { clientname: 'Atach Create kela me', date: '18-01-2017', type: 'Internet Service Agreement', status: true },
  { clientname: 'new task (pbx)', date: '18-01-2017', type: 'Internet Service Agreement', status: false },
  { clientname: 'PBX Test 2', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'test 54th', date: '18-01-2017', type: 'Gaurav ', status: true },
  { clientname: 'Atach Create kela me', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'Test mail', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'task issue', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'task2 mileston 2', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'new task (pbx)', date: '18-01-2017', type: 'Gaurav', status: false },
  { clientname: 'PBX Test 2', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'test 54th', date: '18-01-2017', type: 'Gaurav ', status: true },
  { clientname: 'Atach Create kela me', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'Test mail', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'task issue', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'task2 mileston 2', date: '18-01-2017', type: 'Gaurav', status: true },
  { clientname: 'new task (pbx)', date: '18-01-2017', type: 'Gaurav', status: false },
  { clientname: 'PBX Test 2', date: '18-01-2017', type: 'Gaurav', status: true },

];