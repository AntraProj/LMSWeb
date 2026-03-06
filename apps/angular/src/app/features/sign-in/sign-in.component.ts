import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';

@Component({
  selector: 'lmsweb-sign-in',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  hide = true;
}
