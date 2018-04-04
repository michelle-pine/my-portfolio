import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonsThemeComponent } from './ribbons-theme.component';

describe('RibbonsThemeComponent', () => {
  let component: RibbonsThemeComponent;
  let fixture: ComponentFixture<RibbonsThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonsThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
