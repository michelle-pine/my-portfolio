import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3poR3Component } from './c3po-r3.component';

describe('C3poR3Component', () => {
  let component: C3poR3Component;
  let fixture: ComponentFixture<C3poR3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3poR3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3poR3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
