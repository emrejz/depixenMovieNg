/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiKeyInterceptService } from './apiKeyIntercept.service';

describe('Service: ApiKeyIntercept', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiKeyInterceptService]
    });
  });

  it('should ...', inject([ApiKeyInterceptService], (service: ApiKeyInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
