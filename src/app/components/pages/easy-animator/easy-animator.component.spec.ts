import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyAnimatorComponent } from './easy-animator.component';

describe('EasyAnimatorComponent', () => {
  let component: EasyAnimatorComponent;
  let fixture: ComponentFixture<EasyAnimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyAnimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
