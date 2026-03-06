import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular',
  exposes: {
    './Routes': 'apps/angular/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (libraryName === "@lmsweb/shared-state") {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
      };
    }
  },
};

export default config;
