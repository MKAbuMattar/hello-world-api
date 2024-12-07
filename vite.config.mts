import tsconfigPaths from 'vite-tsconfig-paths';
import {type ViteUserConfig, defineConfig} from 'vitest/config';

const viteConfig: ViteUserConfig = defineConfig({
  test: {
    coverage: {
      include: ['src/**'],
      exclude: [
        '**/node_modules/**',
        '**/bin/*.ts',
        '**/schemas/*',
        '**/types/*',
        '**/server.ts',
      ],
    },
    globals: true,
    restoreMocks: true,
  },
  plugins: [tsconfigPaths()],
}) satisfies ViteUserConfig;

export default viteConfig;