import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousThemeComponent } from './luminous-theme.component';

describe('LuminousThemeComponent', () => {
  let component: LuminousThemeComponent;
  let fixture: ComponentFixture<LuminousThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminousThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminousThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
