import { Route } from '@angular/router';
<<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
=======
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LandingComponent } from './features/landing/landing.component';
import { EmailVerificationComponent } from './features/emailVerification/emailVerification.component';
import { RegisterComponent } from './features/register/register.component';
import { EmailConfirmationComponent } from './features/emailVerification/email-confirmation/email-confirmation.component';
>>>>>>> 037e7f9 (email confirmation)

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'sign-in', component: SignInComponent
  },
<<<<<<< HEAD
=======
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
    path: 'confirmation',
    component: EmailConfirmationComponent
  },
>>>>>>> 037e7f9 (email confirmation)
];
