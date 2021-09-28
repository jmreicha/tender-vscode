# tender-vscode

A VSCode theme heavily inspired by the [tender.vim](https://github.com/jacoborus/tender.vim) colorscheme.

**Clone and run for a quick way to get started with [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator).**

## Screenshots

![typescript](https://user-images.githubusercontent.com/1039098/134945798-23308797-b4dc-4773-ba0f-789cf51ce024.png)

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

Make your changes to the colors in `index.ts` and hit F5 to build the theme and
launch a new VS Code window with your theme available in the command palette
(`ctrl`/`cmd+shift+p` > "Color Theme").

To skip the debugging step simply run the `nmp run` command to generate the
theme.

```js
npm run prestart && npm run start
```

Then install the theme locally to test.

```bash
code --install-extension tender-<version>.vsix
```

## Publishing

See
[here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
for more information on how to publish a VSCode Extension.

When you're ready to publish, run the following commands.

```js
// If not logged into the VS Code Extension Marketplace, first login
vsce login <username>
// Then package the theme
vsce package
```

```js
// Bump the version number and publish
vsce publish minor
```

## Customizing the theme

Currently there are some colors that are not generated automatically. To work
around this, you can set colors for specific tokens that should be overridden.

For example, add the following snippet to your `settings.json` to customize the
theme further.

```json
"editor.tokenColorCustomizations": {
    "[Tender]": {
      "textMateRules": [
        {
          "scope": [
            "punctuation.separator.dictionary.key-value.json",
            "punctuation.separator.dict",
            "punctuation.separator.key-value",
            "keyword.operator"
          ],
          "settings": {
            "foreground": "#f43753",
          }
        },
        {
          "scope": [
            "punctuation.separator",
            "punctuation.other",
            "constant.other.placeholder",
            "entity.name.function",
            "entity.name.function.shell",
            "entity.name.function.python"
          ],
          "settings": {
            "foreground": "#73cef4",
          }
        },
        {
          "scope": "keyword.codetag.notation",
          "settings": {
            "foreground": "#ff7b6b",
          }
        },
        {
          "scope": "keyword.operator.assignment",
          "settings": {
            "foreground": "#eeeeee",
          }
        },
        {
          "scope": "string.quoted",
          "settings": {
            // "foreground": "#A8FF60",
            "foreground": "#b3deef",
          }
        },
        {
          "scope": "constant, constant.language, constant.other.placeholder",
          "settings": {
            "foreground": "#d3b987"
          }
        },
        {
          "scope": "variable.other.normal, variable.other.bracket",
          "settings": {
            // "foreground": "#c9d05c",
            // "foreground": "#ffc24b",
            "foreground": "#d3b987",
          }
        },
      ]
    },
  },
```
