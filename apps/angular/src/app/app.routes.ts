import { Route } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LandingComponent } from './features/landing/landing.component';
import { EmailVerificationComponent } from './features/emailVerification/emailVerification.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgotPassword.component';

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

  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path: 'forgotPassword', component: ForgotPasswordComponent
  }
];
