import { Route } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LandingComponent } from './features/landing/landing.component';
import { EmailVerificationComponent } from './features/emailVerification/emailVerification.component';
import { RegisterComponent } from './features/register/register.component';
import { EmailConfirmationComponent } from './features/emailVerification/email-confirmation/email-confirmation.component';
import { ResetPasswordComponent } from './features/auth/reset-password.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'login', component: SignInComponent
  },
  {
    path: 'verify',
    component: EmailVerificationComponent

  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'confirmation', component: EmailConfirmationComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  }
];