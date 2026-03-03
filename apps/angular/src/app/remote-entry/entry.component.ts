import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  selector: 'lmsweb-angular-entry',
  template: `
  <router-outlet></router-outlet>
`,
})
export class RemoteEntryComponent { }
