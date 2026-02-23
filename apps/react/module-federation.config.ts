import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react',

  exposes: {
    './Module': './src/remote-entry.ts',
    './web-components': './src/bootstrap.tsx',
  },

  shared: (libraryName, defaultConfig) => {
    if (libraryName === '@mui/material') {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: '^7.3.7',
      };
    }
    if (libraryName === '@mui/icons-material') {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: '^7.3.7',
      };
    }
    if (libraryName === '@emotion/react' || libraryName === '@emotion/styled') {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
      };
    }
    return defaultConfig;
  },
};

export default config;