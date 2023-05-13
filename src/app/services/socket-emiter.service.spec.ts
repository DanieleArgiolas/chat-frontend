import { TestBed } from '@angular/core/testing';

import { SocketEmiterService } from './socket-emiter.service';

describe('SocketEmiterService', () => {
  let service: SocketEmiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketEmiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
