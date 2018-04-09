import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedProjectComponent } from './locked-project.component';

describe('LockedProjectComponent', () => {
  let component: LockedProjectComponent;
  let fixture: ComponentFixture<LockedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
