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
     this._renderer2.setStyle(matTabBodyWrapper,'border','1px solid rgba(0, 0, 0, 0.12)');
   }
   myDataArray =  new MatTableDataSource<PerElement>(MYPROJECTS_DATA);
   displayedcolumns:string[] = ['projectname', 'client'];
   myDataArraya= new MatTableDataSource<PrElementss>(PIN_DATA);
   displayedcolumnss:string[] = ['projectname', 'client','pinning'];
   DataArray =  new MatTableDataSource<PrElement>(MYTASKS_DATA);
   displaycolumns:string[] = ['taskname', 'client'];
   Dataarray =  new MatTableDataSource<Prelement>(ACCOUNT_DATA);
   discolumns:string[] = ['accountname', 'balance'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   displayedColumns: string[] = ['name', 'weight', 'symbol','position'];
   Dataarray1 = new MatTableDataSource<PeriodicElement1>(AGREEMENTS_DATA);
   discolumns1: string[] = ['clientname', 'type', 'status'];
   Dataarray2 = new MatTableDataSource<PeriodicElement2>(RECENTLY_DATA);
   discolumns2: string[] = ['clientname', 'type', 'status'];
   Dataarray3 = new MatTableDataSource<PeriodicElement3>(RECEN_DATA);
   discolumns3: string[] = ['clientname', 'type', 'status'];
    // Doughnut
  public doughnutChartLabels:string[] = ['Cost of goods sold', 'sales'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';
  private donutColors=[
    {
    backgroundColor: [
    '#6356ae',
    '#27c24c',
    
    ]
    }
    ];
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
    responsive: true,
    // bezierCurve:true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '# of Payments', type: 'line', backgroundColor: "rgba(51,51,51,0.5)", fill: false, lineTension: 0.3 },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Payment Amount ($)' },
  ];
  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#eb942d',
      borderColor: '#eb942d',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#1e90ff',
      borderColor: '#1e90ff',
      pointBackgroundColor: '#1e90ff',
      pointBorderColor: '#1e90ff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
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


  //incomeExpense

  public incomeExpenseOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    // bezierCurve:true
  };
  public incomeExpenseLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public incomeExpenseType: string = 'bar';
  public incomeExpenseLegend: boolean = true;

  public incomeExpenseData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' }
  ];
  public incomeExpenseColors:Array<any> = [
    { // grey
      backgroundColor: '#27c24c',
      borderColor: '#27c24c',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
   
  ];

  //prevIncome

  public prevIncomeOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    // bezierCurve:true
  };
  public prevIncomeLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public prevIncomeType: string = 'bar';
  public prevIncomeLegend: boolean = true;

  public prevIncomeData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' }
  ];
  public prevIncomeColors:Array<any> = [
    { // grey
      backgroundColor: '#f44242',
      borderColor: '#f44242',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
   
  ];

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',lineTension: 0 },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',lineTension: 0 },
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(98,86,172,0.2)',
      borderColor: '#6256ac',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: '#6256ac',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
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
  {clientname: 'Atach Create kela me' , date:'18-01-2017', type: 'Internet Service Agreement' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Internet Service Agreement' ,status:true},
  {clientname: 'PBX Test 2',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)',date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  
];
export interface  PeriodicElement2 {
  clientname: string;
  type: string;
  date: string;
  status:boolean; 
}

const RECENTLY_DATA: PeriodicElement2[] = [
  {clientname: 'Atach Create kela me' , date:'18-01-2017', type: 'Internet Service Agreement' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Internet Service Agreement' ,status:true},
  {clientname: 'PBX Test 2',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)',date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  
];
export interface  PrElementss {
  projectname: string;
  client: string;
  matvalue: number;
  projectdate: string;
  overdue:boolean; 
}

const PIN_DATA: PrElementss[] = [
  {projectname: 'Atach Create kela me' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'test 54th', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav ',overdue:true},
  {projectname: 'Atach Create kela me' ,matvalue: 100,projectdate:'18-01-2017', client: 'Gaurav',overdue:true},
  {projectname: 'Test mail', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task issue', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task2 mileston 2' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'test 54th', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav ',overdue:true},
  {projectname: 'Atach Create kela me' ,matvalue: 100,projectdate:'18-01-2017', client: 'Gaurav',overdue:true},
  {projectname: 'Test mail', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task issue', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task2 mileston 2' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  
];
export interface  PeriodicElement3 {
  clientname: string;
  type: string;
  date: string;
  status:boolean; 
}

const RECEN_DATA: PeriodicElement3[] = [
  {clientname: 'EST0039' , date:'18-01-2017', type: 'Internet Service Agreement' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Internet Service Agreement' ,status:true},
  {clientname: 'PBX Test 2',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)',date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  
];