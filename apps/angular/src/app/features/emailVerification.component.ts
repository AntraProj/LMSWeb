import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lmsweb-email-verification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './emailVerification.component.html',
  styleUrl: './emailVerification.component.css',
})
export class EmailVerificationComponent {
   countdown = signal(37);
   private fb = inject(FormBuilder)
   otpForm = this.fb.group({
    digits: this.fb.array(
      Array(6).fill('').map(() => this.fb.control('', [
        Validators.required,
        Validators.pattern('[0-9]')
      ]))
    )
  });
  
  get digits(): FormArray {
    return this.otpForm.get('digits') as FormArray;
  }
}
