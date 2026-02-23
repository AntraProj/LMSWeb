import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react',

  exposes: {
    './Module': './src/remote-entry.ts',
    './web-components': './src/bootstrap.tsx',
  },
};

export default config;
