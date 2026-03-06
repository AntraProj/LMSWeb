import { Route } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LandingComponent } from './features/landing/landing.component';
import { EmailVerificationComponent } from './features/emailVerification/emailVerification.component';
import { RegisterComponent } from './features/register/register.component';
<<<<<<< HEAD
import { ForgotPasswordComponent } from './features/forgot-password/forgotPassword.component';
=======
import { EmailConfirmationComponent } from './features/emailVerification/email-confirmation/email-confirmation.component';
>>>>>>> origin/angular

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
<<<<<<< HEAD
    path:'register', component: RegisterComponent
  },
  {
    path: 'forgotPassword', component: ForgotPasswordComponent
=======
    path: 'register', component: RegisterComponent
  },
  {
    path: 'confirmation', component: EmailConfirmationComponent
>>>>>>> origin/angular
  }
];