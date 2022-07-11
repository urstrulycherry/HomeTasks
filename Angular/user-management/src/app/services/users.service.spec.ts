import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should set activation to true', () => {
    service.setActivation('1', true);
    let userStatus: boolean = false
    service.getUserById('1').subscribe(
      user => {
        userStatus = user.isDeleted
      }
    )
    expect(userStatus).toBe(true);
  });

  it('should set activation to false', () => {
    service.setActivation('2', false);
    let userStatus: boolean = true
    service.getUserById('2').subscribe(
      user => {
        userStatus = user.isDeleted
      }
    )
    expect(userStatus).toBe(false);
  });

  it('should count deleted users to be 1', () => {
    let count: number = 0;
    service.getDeletedUsers().subscribe(
      users => {
        count = users.length
      }
    )
    expect(count).toBe(1);
  })
});
