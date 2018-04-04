import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderThemeComponent } from './wonder-theme.component';

describe('WonderThemeComponent', () => {
  let component: WonderThemeComponent;
  let fixture: ComponentFixture<WonderThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
