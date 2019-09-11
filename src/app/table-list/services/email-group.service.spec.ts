import { TestBed } from '@angular/core/testing';

import { EmailGroupService } from './email-group.service';

describe('EmailGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailGroupService = TestBed.get(EmailGroupService);
    expect(service).toBeTruthy();
  });
});
