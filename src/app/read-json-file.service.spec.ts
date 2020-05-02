import { TestBed } from '@angular/core/testing';

import { ReadJsonFileService } from './read-json-file.service';

describe('ReadJsonFileService', () => {
  let service: ReadJsonFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadJsonFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
