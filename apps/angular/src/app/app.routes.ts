import { Route } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LandingComponent } from './features/landing/landing.component';
import { EmailVerificationComponent } from './features/emailVerification/emailVerification.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login', component: SignInComponent
  },
  {
    path: 'verify',
    component: EmailVerificationComponent

  }
];
