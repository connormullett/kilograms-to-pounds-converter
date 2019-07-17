import { TestBed } from '@angular/core/testing';

import { ConverterServiceService } from './converter-service.service';

describe('ConverterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConverterServiceService = TestBed.get(ConverterServiceService);
    expect(service).toBeTruthy();
  });
});
