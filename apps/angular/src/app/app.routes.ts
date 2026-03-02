import { Route } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

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
];
