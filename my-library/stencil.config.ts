import { Config } from '@stencil/core';
import {reactOutputTarget as react} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'my-library',
  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    react({
      componentCorePackage: 'my-library',
      proxiesFile: '../my-example/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    }
  ],
};
