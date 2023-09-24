import { TestBed } from '@angular/core/testing';

import { DateTimeToolsService } from './date-time-tools.service';

describe('DateTimeToolsService', () => {
  let service: DateTimeToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
