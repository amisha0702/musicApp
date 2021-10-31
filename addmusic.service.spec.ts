import { TestBed } from '@angular/core/testing';

import { AddmusicService } from './addmusic.service';

describe('AddmusicService', () => {
  let service: AddmusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
