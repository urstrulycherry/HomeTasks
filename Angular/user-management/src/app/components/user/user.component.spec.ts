import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { User } from 'src/models/user';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserComponent, FullNamePipe]
        }).compileComponents();
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        component.user = {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            login: 'johndoe',
            password: 'joh****',
            isDeleted: false
        }
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should display user full name', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.name').textContent).toContain('John Doe');
    })

    it('should have button', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button')).toBeTruthy();
    })
});
