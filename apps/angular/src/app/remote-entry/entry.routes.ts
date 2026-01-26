import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { 
    path: '', 
    component: RemoteEntryComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.component').then(m => m.HomeComponent),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  },
];
