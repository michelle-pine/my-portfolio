import { TestBed, inject } from '@angular/core/testing';

import { PjvideoService } from './pjvideo.service';

describe('PjvideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PjvideoService]
    });
  });

  it('should be created', inject([PjvideoService], (service: PjvideoService) => {
    expect(service).toBeTruthy();
  }));
});
