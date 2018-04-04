import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotiquoteComponent } from './emotiquote.component';

describe('EmotiquoteComponent', () => {
  let component: EmotiquoteComponent;
  let fixture: ComponentFixture<EmotiquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotiquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotiquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
