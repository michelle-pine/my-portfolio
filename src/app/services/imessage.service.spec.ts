import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './imessage.service';

describe('ImessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
