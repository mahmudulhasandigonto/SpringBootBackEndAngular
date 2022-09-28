import { TestBed } from '@angular/core/testing';

import { TitileAndSloganService } from './titile-and-slogan.service';

describe('TitileAndSloganService', () => {
  let service: TitileAndSloganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitileAndSloganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
