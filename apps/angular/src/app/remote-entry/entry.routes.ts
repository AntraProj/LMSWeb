import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'landing',
        loadComponent: () =>
          import('../features/landing/landing.component').then(
            (m) => m.LandingComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../features/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
    path: 'registration-success',
    loadComponent: () =>
      import('../features/registration-confirmation/registration-confirmation.component')
      .then(m => m.RegistrationConfirmationComponent),
    },

    ],
  },
];
