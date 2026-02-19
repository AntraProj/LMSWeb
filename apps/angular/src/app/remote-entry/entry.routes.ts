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
    ]
  },
];
