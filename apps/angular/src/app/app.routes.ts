import { Route } from '@angular/router';
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
];
