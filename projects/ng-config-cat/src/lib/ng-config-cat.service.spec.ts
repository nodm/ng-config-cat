import { TestBed } from '@angular/core/testing';

import { NgConfigCatService } from './ng-config-cat.service';

describe('NgConfigCatService', () => {
  let service: NgConfigCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgConfigCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
