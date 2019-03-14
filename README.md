# Kirby Starterkit
[![Release](https://img.shields.io/github/release-pre/quentin-f451/kirby-starterkit.svg)](https://github.com/quentin-f451/kirby-starterkit/releases)

This repo is my own starterkit for Kirby 3 projects. It works with Webpack and BrowserSync and allows to work with SCSS and ES6. Featuring [Kirby CMS](https://getkirby.com/) and [SCSS Starterkit](https://github.com/quentin-f451/scss-starterkit).

## Requirements

+ [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
+ [Composer](https://getcomposer.org/doc/00-intro.md)
+ A production server with >=PHP7.1. I personally use [MAMP Pro](https://www.mamp.info/en/mamp-pro/).

## Installation

1. In Terminal, go to your production folder:
```
cd path/to/my/folder
```

2. Clone this repository with the submodules
```
git clone --recurse-submodules https://github.com/quentin-f451/kirby-starterkit
cd kirby-starterkit
git submodule update
```

3. Install and update Kirby
```
cd kirby
composer update
cd ..
```

4. Install dependencies with npm
```
npm install
```

5. Launch your production server (for example in MAMP) and link it to your folder. For example, I create the production server `http://test:8888` linked to the `kirby-starterkit` folder.

6. Update `webpack.config.js` file with the address of your production server
```js
const localhost = 'http://test:8888';
```

7. You just have to type `npm run start` now and to start coding. The browser will reload at every saved change!

8. At the end of your coding process, you can run the `npm run build` command.

## Folder structure

After the installation, your folder will more or less look like that:

```
assets/
content/
kirby/
media/
node_modules/
site/
src/
.htaccess
CHANGELOG.md
composer.json
index.php
LICENCE
package.json
package-lock.json
postcss.config.js
README.md
webpack.config.js
```

You will apply the changes to the following files/folders:
+ `site` folder and its subfolders: the main folder for Kirby coding. [Kirby documentation](https://getkirby.com/docs/reference) will be really useful to help you here.
+ `src` folder and its subfolders: every file that is here will be compile to the `assets` folder. You will already find `scss` and `js` folders where you can code your stylesheets (with SCSS/CSS) and your scripts (with JS). You might have to add `fonts` and `images` folders for font and image files that are linked to your CSS files. In `scss` folder, you will already find my [SCSS Starterkit](https://github.com/quentin-f451/scss-starterkit), very useful if you want to configure you website really easily. 

All other files can obviously be modified, **if you know what you are doing!!!**

## Contribute 

Feel free to submit any issue or request.

*This project is in a beta version and I develop it for my own projects. Don't use it on a production website if you're not sure of being able to correct my bugs!*
