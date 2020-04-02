# Webpack 4 Boilerplate Typescript/Sass

This Webpack 4 Boilerplate comes with 2 builds:

- `npm run build:dev` starts dev server on `localhost:8080` with:

  1. livereload
  2. sourcemap

- `npm run build:prod` creates prod files to `/dist` with:

  1. compiles sass to css
  2. autoprefixer for vendor prefixes (browser compability)
  3. compiles typescript to ES5
  4. minifying for css/js
  5. uglyfing js code
  6. hash css and js file (file versioning for browser caching -> cache busting)

## Setup

1. `git clone https://github.com/DarkMatterMatt/Webpack-4-boilerplate-Typescript.git` clone and run `npm install` in project folder
2. `npm run build:dev` or just `npm start` which also starts the dev mode
