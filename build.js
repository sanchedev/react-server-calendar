const esbuild = require('esbuild')

// Client
esbuild
  .build({
    entryPoints: ['src/client/script.tsx'],
    jsx: 'automatic',
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
    },
    platform: 'browser',
    format: 'esm',
    bundle: true,
    outfile: 'public/script.js',
  })
  .catch(() => process.exit(1))

// Server
esbuild
  .build({
    entryPoints: ['src/server/server.tsx'],
    jsx: 'automatic',
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
    },
    platform: 'node',
    format: 'cjs',
    bundle: true,
    outfile: 'dist/server.js',
  })
  .catch(() => process.exit(1))
