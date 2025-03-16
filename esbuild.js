const esbuild = require('esbuild');

// Build configuration for app.js
esbuild.build({
  entryPoints: ['./src/app.js'],
  bundle: true, // Bundles all dependencies into a single file
  minify: true, // Minifies the output
  outfile: './dist/bundled-app-min.js', // Single output file
  platform: 'browser', // Target browser environments
  sourcemap: false, // Optional: Set to 'inline' or 'external' if needed
  target: ['es6'], // Target modern browsers
}).catch(() => process.exit(1));

// Build configuration for swiperapp.js
esbuild.build({
  entryPoints: ['./src/swiperapp.js'],
  bundle: true, // Bundles all dependencies into a single file
  minify: true, // Minifies the output
  outfile: './dist/bundled-swiper-min.js', // Single output file
  platform: 'browser', // Target browser environments
  sourcemap: false, // Optional: Set to 'inline' or 'external' if needed
  target: ['es6'], // Target modern browsers
  loader: { 
    '.css': 'css' 
  },
  // This will inject CSS into a style tag
  inject: ['./setup-css.js'],
}).catch(() => process.exit(1));