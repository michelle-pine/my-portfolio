import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylightThemeComponent } from './daylight-theme.component';

describe('DaylightThemeComponent', () => {
  let component: DaylightThemeComponent;
  let fixture: ComponentFixture<DaylightThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylightThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
