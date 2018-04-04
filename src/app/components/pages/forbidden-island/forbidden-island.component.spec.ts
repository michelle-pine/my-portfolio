import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenIslandComponent } from './forbidden-island.component';

describe('ForbiddenIslandComponent', () => {
  let component: ForbiddenIslandComponent;
  let fixture: ComponentFixture<ForbiddenIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
