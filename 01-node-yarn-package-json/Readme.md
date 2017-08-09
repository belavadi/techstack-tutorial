# 01 - Node, Yarn, and `package.json`

Welcome to our xxxlutz Development Tutorial. This contains content and information you need to get your Javascript Development started. This is heavily influenced (and copied lots of stuff) by [verekias stack](https://github.com/verekia/js-stack-from-scratch) but adapted for xxxlutz specific Development.


We start with the very basics, if you know most of the setup you will be faster, if not you have till tomorrow to finish your setup and we are there to help you out. Have fun Coding!

The main Development program is **[Google Chrome](https://www.google.de/chrome/browser/desktop/index.html)**, especially the Console (Press `F12`) for debugging.

## IDE / Texteditor

This Tutorial is created for the Texteditor **[Visual Code Studio](https://code.visualstudio.com/)**, but the Development would actually work with any Editor. So if you rather prefer Atom, Sublime Text oder Notepad you can use it to.

In this section we will set up Node, Yarn, a basic `package.json` file, and try a package.

## Node

> 💡 **[Node.js](https://nodejs.org/)** is a JavaScript runtime environment. It is mostly used for Back-End development, but also for general scripting. In the context of Front-End development, it can be used to perform a whole bunch of tasks like linting, testing, and assembling files.

We will use Node for basically everything in this tutorial, so you're going to need it. Head to the [download page](https://nodejs.org/en/download/current/) for **macOS** or **Windows** binaries, or the [package manager installations page](https://nodejs.org/en/download/package-manager/) for Linux distributions.

For instance, on **Ubuntu / Debian**, you would run the following commands to install Node:

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If you already have nodejs installed on your machine, make sure you have a version > 6.5.0 using the command `node -v`

On Windows open the NodeJs cmd as a terminal (command line interface - CLI)

## NPM

NPM is the default package manager for Node. It is automatically installed alongside with Node. Package managers are used to install and manage packages (modules of code that you or someone else wrote). We are going to use a lot of packages in this tutorial, but we'll use Yarn, another package manager.

## Yarn (used for this tutorial)

> **[Yarn](https://yarnpkg.com/)** is a Node.js package manager which is much faster than NPM, has offline support, and fetches dependencies [more predictably](https://yarnpkg.com/en/docs/yarn-lock).

Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install) for your OS.

If you are on a macOS or Unix Maching use the **Installation Script** from the *Alternatives* tab , to [avoid](https://github.com/yarnpkg/yarn/issues/1505) relying on other package managers:

`curl -o- -L https://yarnpkg.com/install.sh | bash`

For Windows download the executable from https://yarnpkg.com/latest.msi and run the setup.

## `package.json`

> 💡 **[package.json](https://yarnpkg.com/en/docs/package-json)** is the file used to describe and configure your JavaScript project. It contains general information (your project name, version, contributors, license, etc), configuration options for tools you use, and even a section to run *tasks*.


- Create a new folder to work in, and `cd` in it.
- Run `yarn init` and answer the questions (`yarn init -y` to skip all questions), to generate a `package.json` file automatically.

Here's the basic `package.json` file

```json
{
  "name": "your-project",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

## Hello World

**Create** an `index.js` file containing `console.log('Hello world');`

:::info
**Run:** `node .` in this folder (`index.js` is the default file Node looks for in a folder). It should print:
<br>

    Hello world
:::


## `start` script

Running `node .` to execute our program is a bit too low-level. We are going to use an NPM/Yarn script to trigger the execution of that code instead.

This lets use use `yarn start`, even when our program gets more complicated.

In `package.json`, **add** a `scripts` section:

```json
{
  "name": "xxxldigital-Developer-Platform",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node ."
  }
}
```

`start` is the name we give to the *task* that will run our program. We are going to create a lot of different tasks in this `scripts` object throughout this tutorial. `start` is typically the name given to the default task of an application. Some other standard task names are `stop` and `test`.

`package.json` must be a valid JSON file, which means that you cannot have trailing commas. So be careful when editing manually your `package.json` file.

:::info
**Run:** `yarn start`

<br>

    Hello world
:::

## Git and `.gitignore`

:::success
Initialize a Git repository with `git init`

<br>

After completing a page successfully
**run** `git add .`
and then
`git commit -m="[Page]"`

replace `[Page]` with the currently completed page

<br>

At the end of every page, we'll remind you to commit your changes.
:::


- **Create** a `.gitignore` file and add the following to it:

```gitignore
.DS_Store
/*.log
```

`.DS_Store` files are auto-generated macOS files that you should never have in your repository.

`npm-debug.log` and `yarn-error.log` are files that are created when your package manager encounters an error, we don't want them versioned in our repository.

## Installing and using a package

In this section we will install and use a package. A "package" is simply a piece of code that someone else wrote, and that you can use in your own code. It can be anything. Here, we're going to try a package that helps you manipulate colors for instance.

- Install the community-made package called `color` by running `yarn add color`

Open `package.json` to see how Yarn automatically added `color` in  `dependencies`.

A `node_modules` folder has been created to store the package.

**Add** `node_modules/` to your `.gitignore`

You will also notice that a `yarn.lock` file got generated by Yarn. You should commit this file to your repository, as it will ensure that everyone in your team uses the same version of your packages. If you're sticking to NPM instead of Yarn, the equivalent of this file is the *shrinkwrap*.

**Replace** the content of your `index.js` file:

```js
const color = require('color');

const redHexa = color({ r: 255, g: 0, b: 0 }).hex();

console.log(redHexa);
```

:::info
**Run:** `yarn start`

<br>

    #FF0000
:::

Congratulations, you installed and used a package!

`color` is just used in this section to teach you how to use a simple package. We won't need it anymore, so you can uninstall it:

:::info
**Run:** `yarn remove color`
:::

## Two kinds of dependencies

There are two kinds of package dependencies, `"dependencies"` and `"devDependencies"`:

**Dependencies** are libraries you need for your application to function (React, Redux, Lodash, jQuery, etc). You install them with `yarn add [package]`.

**Dev Dependencies** are libraries used during development or to build your application (Webpack, SASS, linters, testing frameworks, etc). You install those with `yarn add --dev [package]`.

Next section: [02 - Babel, ES6, ESLint and Husky](https://github.com/moonshiner-agency/LutzJsStackWalkthrough/blob/master/02-babel-es6-eslint-husky/Readme.md)

Back to the [table of contents](https://github.com/moonshiner-agency/LutzJsStackWalkthrough/blob/master/Readme.md).