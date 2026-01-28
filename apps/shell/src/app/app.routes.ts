import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular',
    loadChildren: () => loadRemoteModule('angular', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'react',
    children: [
      {
        path: '',
        component: ReactWrapperComponent,
        data: {
          elementName: 'react-element',
          loadChildren: () => loadRemoteModule('react', './web-components'),
        },
      },
      {
        path: '**',
        component: ReactWrapperComponent,
        data: {
          elementName: 'react-element',
          loadChildren: () => loadRemoteModule('react', './web-components'),
        },
      },
    ],
  },
];