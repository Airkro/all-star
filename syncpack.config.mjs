import defineConfig from '@nice-move/syncpack-config';

// @ts-check

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
      pinVersion: '0.16.0',
    },
  ],
});
