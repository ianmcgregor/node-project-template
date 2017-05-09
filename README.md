# Node Project Template

Express/React node app project template

## Contents

### Main folders

* `/public`  The build folder
* `/docs`  Documentation
* `/scripts` Build scripts
* `/client`  Client side source files
* `/server`  Server side app
* `/test`  Unit tests

### Directory Structure

```
├── bin
├── client
│   ├── components
│   ├── styles
│   │   ├── fonts
│   │   ├── elements.css
│   │   ├── fonts.css
│   │   ├── media.css
│   │   ├── props.css
│   │   ├── sections.css
│   │   └── utils.css
│   ├── utils
│   │   └── polyfills
│   │       └── index.js
│   ├── favicon-32.png
│   ├── favicon-152.png
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── robots.txt
├── docs
├── public
├── scripts
│   ├── audio.js
│   ├── copy.js
│   ├── html.js
│   ├── img-convert.js
│   ├── tinify.js
│   └── utils.js
├── server
│   ├── assets
│   ├── routes
│   │   └── index.js
│   ├── utils
│   └── app.js
├── test
│   ├── bootstrap.js
│   ├── mocha.opts
│   └── test.spec.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .stylelintrc
├── bs-config.js
├── karma.conf.js
├── LICENSE
├── modernizr-config.json
├── nodemon.json
├── package.json
├── postcss.config.js
└── README.md
```

`.gitignore` files are used to include some otherwise empty directories in the repository in order to define a reusable project structure.

## Set up

### Getting started

From a terminal or command prompt at the project root run:

```shell
npm i
npm start:dev
```

## Server

The `server` folder contains a minimal starting point based on express generator.

## Client

### JS

Polyfills and utilities are included in `src/utils/`. All other JS files are in their respective component folders.

[Babel](https://babeljs.io/) is included to transpile es6/7. The default presets are es2015 and stage-0.

A [simple modernizr version](http://modernizr.com/download?-touchevents-addtest-setclasses-testprop-dontmin-cssclassprefix:Modernizr-) is included in the project in `modernizr-config.json`. It includes the standard HTML5 shim/shiv, CSSClasses, testProp and addTest. It also includes `touchevents` to exclude hover states from mobile devices. Modernizr CSS classNames are prefixed with `Modernizr-` to make them easy to recognise.

Utility package [usfl](https://github.com/ianmcgregor/usfl) is included by default.

### CSS

The default CSS structure and build is based on [SUIT CSS](https://github.com/suitcss/) conventions. [Normalize](http://necolas.github.io/normalize.css/) and [SUIT base](https://github.com/suitcss/base/) are included as a basis for the project CSS.

Base styles and utilities are included in `src/styles/`. All other CSS files are in their respective component folders.

[PostCSS](https://github.com/postcss/postcss) transpiles the CSS to support future syntax and vendor prefixes.

### Assets

Static assets such as icons are included in their respective component folder in `src/components`. They are optimised and copied into folders in `public/img` as part of the build process.

## Usage

### Building

Npm is used to run the build tasks for the project. The tasks are all defined in `package.json`, with scripts for more complicated tasks are contained in the `scripts` directory.

Starts the app with `pm2`:

```shell
npm start
```

Starts the server with `nodemon`, runs the build tasks and starts the watch tasks:

```shell
npm start:dev
```

Processes assets and builds CSS and JS bundles to the `public` folder:

```shell
npm run build
```

Deletes `public` and recreates folder structure:

```shell
npm run clean
```

Starts a simple web server that reloads when changes are made:

```shell
npm run browsersync
```

Builds CSS bundle to `public/css/styles.css`:

```shell
npm run css
```

Builds JS bundle to `public/js/bundle.js`:

```shell
npm run js
```

Generates modernizr.js and outputs to `public/js`:

```shell
npm run modernizr
```

Renders HTML templates and copies to `public`:

```shell
npm run html
```

Copies files to `public`:

```shell
npm run copy
```

Reformats and (optionally) resizes images and copies to `public/img`:

```shell
npm run img:convert
```

Tinifies images and copies to `public/img`:

```shell
npm run img:tinify
```

Converts audio files to ogg and mp3 and outputs to `public/audio`:

```shell
npm run audio
```

### Linting

[ESLint](http://eslint.org/) and [stylelint](http://stylelint.io/) are setup to lint the files in both `client` and `server` directories. Rules can be configured by editing the `.eslintrc` and `.stylelintrc` files in the project root.

```shell
npm run lint
npm run lint:js
npm run lint:css
```

A detailed report highlighting any problems will be output to the console.

### Testing

A testing set up is included, utilising the [Mocha](http://visionmedia.github.io/mocha/) framework and [Chai](http://chaijs.com/) assertion library. A report highlighting any failed test will be output to the console.

Single run, with linting:

```shell
npm test
```

Keep running until the task is terminated and rerun tests when files are changed:

```shell
npm test:debug
```
