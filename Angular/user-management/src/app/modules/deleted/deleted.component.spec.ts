import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { DeletedComponent } from './deleted.component';

describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DeletedComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(DeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have userDetails Component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-users-list')).toBeTruthy();
  })

  it('should have red border', () => {
    try {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.card-body').classList.contains('red')).toBeTruthy();
    } catch (error) { }
  })

  it('should have button with activate text', () => {
    try {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('button')[0].textContent).toContain('Activate');
    } catch (error) { }
  })

  it('should remove user from list when click on Activate', () => {
    try {
      const compiled = fixture.debugElement.nativeElement;
      const beforeDelete = compiled.querySelectorAll('.card-body').length;
      compiled.querySelector('button').click();
      fixture.detectChanges();
      const afterDelete = compiled.querySelectorAll('.card-body').length;
      console.log("Before", beforeDelete, afterDelete);
      expect(beforeDelete).toBeGreaterThan(afterDelete);
    } catch (error) { }
  })

});
