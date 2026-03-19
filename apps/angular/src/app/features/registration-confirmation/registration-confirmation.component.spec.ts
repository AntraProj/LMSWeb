import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationConfirmationComponent } from './registration-confirmation.component';

describe('RegistrationConfirmationComponent', () => {
  let component: RegistrationConfirmationComponent;
  let fixture: ComponentFixture<RegistrationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
