import { TestBed } from '@angular/core/testing';

import { NgConfigCatService } from './ng-config-cat.service';

describe('NgConfigCatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgConfigCatService = TestBed.get(NgConfigCatService);
    expect(service).toBeTruthy();
  });
});
