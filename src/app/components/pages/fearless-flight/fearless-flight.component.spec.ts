import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FearlessFlightComponent } from './fearless-flight.component';

describe('FearlessFlightComponent', () => {
  let component: FearlessFlightComponent;
  let fixture: ComponentFixture<FearlessFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FearlessFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FearlessFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
