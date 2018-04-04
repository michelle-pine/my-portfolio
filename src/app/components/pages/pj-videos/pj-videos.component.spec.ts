import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjVideosComponent } from './pj-videos.component';

describe('PjVideosComponent', () => {
  let component: PjVideosComponent;
  let fixture: ComponentFixture<PjVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
