import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarborneThemeComponent } from './starborne-theme.component';

describe('StarborneThemeComponent', () => {
  let component: StarborneThemeComponent;
  let fixture: ComponentFixture<StarborneThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarborneThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarborneThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
