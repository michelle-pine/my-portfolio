import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanketsForBostonComponent } from './blankets-for-boston.component';

describe('BlanketsForBostonComponent', () => {
  let component: BlanketsForBostonComponent;
  let fixture: ComponentFixture<BlanketsForBostonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlanketsForBostonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanketsForBostonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
