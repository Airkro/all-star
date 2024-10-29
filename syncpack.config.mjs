// @ts-check

import defineConfig from '@nice-move/syncpack-config/define.cjs';

export default defineConfig(import.meta.url, {
  semverGroups: [
    {
      dependencies: ['garou'],
      range: '>=',
    },
  ],
  versionGroups: [
    {
      dependencies: ['@all-star/*'],
      dependencyTypes: ['local'],
      label: 'Same version',
      pinVersion: '0.17.17',
    },
  ],
});
