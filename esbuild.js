const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/app.js'],
  bundle: true, // Bundles all dependencies into a single file
  minify: true, // Minifies the output
  outfile: './dist/bundled-app-min.js', // Single output file
  platform: 'browser', // Target browser environments
  sourcemap: false, // Optional: Set to 'inline' or 'external' if needed
  target: ['es6'], // Target modern browsers
}).catch(() => process.exit(1));