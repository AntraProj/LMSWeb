import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lmsweb-registration-confirmation',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent {

  constructor(private router: Router) {}

  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }

  // goToHome() {
  //   this.router.navigate(['/']);
  // }

  goToPage(path:string){
    this.router.navigate([path]);
  }

}