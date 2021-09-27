# tender-vscode

![tender](https://cloud.githubusercontent.com/assets/829859/18413534/f7cb472c-77aa-11e6-86bf-9c790aadd2df.png)

**Clone and run for a quick way to get started with [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator).**

## Install

1. Go to [VS
   Marketplace](https://marketplace.visualstudio.com/items?itemName=jmreicha.tender).
2. Click on the "Install" button.
3. Then [select a
   theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme).
    * Tender

## How to build the theme

You will need [NodeJS](https://nodejs.org/en/) installed to run the generator as
well as well as the vsce module.

```js
npm install -g vsce
npm install
```

Make your changes to the colors in index.ts and hit F5 to build the theme and
launch a new VS Code window with your theme available in the command palette
(`ctrl`/`cmd+shift+p` > "Color Theme").

To skip the debugging step simply run the `nmp run` command to generate the
theme.

## Publishing

When you're ready to publish, run the following commands.

First, generate the theme.

```js
npm run
```

See
[here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
for more information on how to publish a VSCode Extension.

```js
// If not logged into the VS Code Extension Marketplace
vsce login <username>
vsce package
vsce publish
```

```js
// Optionally bump the version number
vsce publish minor
```
