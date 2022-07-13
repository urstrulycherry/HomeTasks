import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { UserStatusPipe } from 'src/app/pipes/user-status.pipe';

import { UserDetailsComponent } from './user-details.component';

describe('UsersDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent, FullNamePipe, UserStatusPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      login: 'johndoe',
      password: 'joh****',
      isDeleted: true
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user full name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('John Doe');
  })

  it('should have 4 row classes', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.row').length).toBe(4);
  })

  it('should contain login johndoe', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.login').textContent).toContain('johndoe');
  })
});