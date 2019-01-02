import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards3Component } from './cards3.component';

describe('Cards3Component', () => {
  let component: Cards3Component;
  let fixture: ComponentFixture<Cards3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cards3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
