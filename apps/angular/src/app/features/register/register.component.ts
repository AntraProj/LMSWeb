import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { passwordMatchValidator } from './validators/password-match.validator';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { HeaderComponent } from '../../shared/layout/header/header.component';




@Component({
  selector: 'lmsweb-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', Validators.required],
    username: ['', Validators.required],
    password: [
  '',
  [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
  ]
],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  },
{
    validators: passwordMatchValidator('password', 'confirmPassword'),
  }
);

  

  get email() {
  return this.form.get('email');
}

get fullName() {
  return this.form.get('fullName');
}

get username() {
  return this.form.get('username');
}

get password() {
  return this.form.get('password');
}

/* ===== Password Rules ===== */

get hasMinLength(): boolean {
  return !!this.password?.value && this.password.value.length >= 8;
}

get hasUpperCase(): boolean {
  return !!this.password?.value && /[A-Z]/.test(this.password.value);
}

get hasLowerCase(): boolean {
  return !!this.password?.value && /[a-z]/.test(this.password.value);
}

get hasNumber(): boolean {
  return !!this.password?.value && /[0-9]/.test(this.password.value);
}

/* ===== Strength Score ===== */

get passwordStrength(): number {
  let score = 0;

  if (this.hasMinLength) score++;
  if (this.hasUpperCase) score++;
  if (this.hasLowerCase) score++;
  if (this.hasNumber) score++;

  return score;
}

get strengthPercent(): number {
  return (this.passwordStrength / 4) * 100;
}

get strengthColor(): string {
  switch (this.passwordStrength) {
    case 1:
      return '#ef4444'; // red
    case 2:
      return '#f59e0b'; // orange
    case 3:
      return '#3b82f6'; // blue
    case 4:
      return '#22c55e'; // green
    default:
      return '#e5e7eb'; // gray
  }
}


get confirmPassword() {
  return this.form.get('confirmPassword');
}

get terms() {
  return this.form.get('terms');
}

}
