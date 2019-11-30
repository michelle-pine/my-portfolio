import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardQuestComponent } from './wizard-quest.component';

describe('WizardQuestComponent', () => {
  let component: WizardQuestComponent;
  let fixture: ComponentFixture<WizardQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
