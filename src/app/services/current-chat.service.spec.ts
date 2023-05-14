import { TestBed } from '@angular/core/testing';

import { CurrentChatService } from './current-chat.service';

describe('CurrentChatService', () => {
  let service: CurrentChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
