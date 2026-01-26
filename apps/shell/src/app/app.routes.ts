import { Route } from '@angular/router';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular',
    loadChildren: () => import('angular/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'react',
    component: ReactWrapperComponent, 
    data: {
      elementName: 'react-element', 
      loadChildren: () => import('react/web-components') 
    },
  },
];