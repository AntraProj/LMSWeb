import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { toSignal } from '@angular/core/rxjs-interop';
import { map, startWith } from 'rxjs/operators';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'lmsweb-reset-password',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    SignInComponent,
    RouterModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  showNew = signal(false);
  showConfirm = signal(false);

  submitted = signal(false);
  success = signal(false);

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    newPassword: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });


  password = toSignal(
    this.form.controls.newPassword.valueChanges.pipe(
      startWith(this.form.controls.newPassword.value ?? ''),
      map((v) => String(v ?? ''))
    ),
    { initialValue: '' }
  );


  hasMin8 = computed(() => this.password().length >= 8);
  hasUpper = computed(() => /[A-Z]/.test(this.password()));
  hasLower = computed(() => /[a-z]/.test(this.password()));
  hasNumber = computed(() => /[0-9]/.test(this.password()));

  score = computed(() => {
    let s = 0;
    if (this.hasMin8()) s++;
    if (this.hasUpper()) s++;
    if (this.hasLower()) s++;
    if (this.hasNumber()) s++;
    return s;
  });

  progress = computed(() => (this.score() / 4) * 100);


  passwordsMatch = computed(() => {
    const a = String(this.form.controls.newPassword.value ?? '');
    const b = String(this.form.controls.confirmPassword.value ?? '');
    return a === b;
  });

  toggleNew() {
    this.showNew.set(!this.showNew());
  }

  toggleConfirm() {
    this.showConfirm.set(!this.showConfirm());
  }

  submit() {
    this.submitted.set(true);

    // show success screen
    if (this.form.invalid) return;
    if (!this.passwordsMatch()) return;


    if (this.score() < 4) return;

    this.success.set(true);
  }
}
