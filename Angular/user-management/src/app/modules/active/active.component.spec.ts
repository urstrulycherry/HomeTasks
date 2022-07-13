import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ActiveComponent } from './active.component';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ActiveComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have userDetails Component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-users-list')).toBeTruthy();
  })

  it('should have red border', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-body').classList.contains('green')).toBeTruthy();
  })

  it('should have button with activate text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Deactivate');
  })

  it('should remove user from list when click on Deactivate', () => {
    const compiled = fixture.debugElement.nativeElement;
    const beforeDelete = compiled.querySelectorAll('.card-body').length;
    compiled.querySelector('button').click();
    fixture.detectChanges();
    const afterDelete = compiled.querySelectorAll('.card-body').length;
    console.log("Before", beforeDelete, afterDelete);
    expect(beforeDelete).toBeGreaterThan(afterDelete);
  })
});
