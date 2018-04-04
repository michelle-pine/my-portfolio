import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumblrGraphicsComponent } from './tumblr-graphics.component';

describe('TumblrGraphicsComponent', () => {
  let component: TumblrGraphicsComponent;
  let fixture: ComponentFixture<TumblrGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumblrGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumblrGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
