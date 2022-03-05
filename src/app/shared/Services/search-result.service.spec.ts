import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchResultService } from './search-result.service';

describe('SearchResultService', () => {
  let service: SearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SearchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
