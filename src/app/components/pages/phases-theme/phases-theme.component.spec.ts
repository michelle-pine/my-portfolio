import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesThemeComponent } from './phases-theme.component';

describe('PhasesThemeComponent', () => {
  let component: PhasesThemeComponent;
  let fixture: ComponentFixture<PhasesThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
