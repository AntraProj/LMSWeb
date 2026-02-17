import { Route } from '@angular/router';
import { EmailVerificationComponent } from './features/emailVerification.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),

  },
  {
    path: 'sign-in', component: SignInComponent
  },
  {
    path: 'verifyEmail',
    component: EmailVerificationComponent
  },
    {
    path: 'sign-in',
    component: SignInComponent,
  },
];
