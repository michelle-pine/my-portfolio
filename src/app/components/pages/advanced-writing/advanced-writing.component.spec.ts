import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWritingComponent } from './advanced-writing.component';

describe('AdvancedWritingComponent', () => {
  let component: AdvancedWritingComponent;
  let fixture: ComponentFixture<AdvancedWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
