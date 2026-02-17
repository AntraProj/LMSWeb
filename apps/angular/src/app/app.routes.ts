import { Route } from '@angular/router';
import { EmailVerificationComponent } from './features/emailVerification.component';

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
];
