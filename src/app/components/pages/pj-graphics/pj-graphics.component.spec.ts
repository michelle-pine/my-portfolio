import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjGraphicsComponent } from './pj-graphics.component';

describe('PjGraphicsComponent', () => {
  let component: PjGraphicsComponent;
  let fixture: ComponentFixture<PjGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
