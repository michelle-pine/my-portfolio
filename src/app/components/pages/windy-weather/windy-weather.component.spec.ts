import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindyWeatherComponent } from './windy-weather.component';

describe('WindyWeatherComponent', () => {
  let component: WindyWeatherComponent;
  let fixture: ComponentFixture<WindyWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindyWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
