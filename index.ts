import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Tender';

const colors = {
  black: "#282828",
  brightBlack: "#4e4e4e",
  brightBlue: "#9fcef0",
  brightCyan: "#73cef4",
  brightGreen: "#a8ff60",
  brightMagenta: "#d3b987",
  brightRed: "#f43753",
  brightWhite: "#feffff",
  brightYellow: "#ffc24b",
  blue: "#b3deef",
  cyan: "#73cef4",
  green: "#c9d05c",
  magenta: "#d3b987",
  red: "#ff7b6b",
  white: "#eeeeee",
  yellow: "#ffc24b",
  background: "#262626",
  cursorGreen: "#5fd700",
  grey: "#666666",
  greyOpaque: "#66666680"
}

const colorSet: IColorSet = {
  base: {
    background: colors.background,
    foreground: colors.white,
    color1: colors.cyan,
    color2: colors.magenta,
    color3: colors.green,
    color4: colors.yellow
  },
  syntax: {
    identifier: colors.white,
    string: colors.blue,
    keyword: colors.cyan,
    number: colors.red,
    boolean: colors.cyan,
    function: colors.white,
    functionCall: colors.cyan,
    comment: colors.grey,
    class: colors.brightBlue,
    classMember: colors.cyan,
    storage: colors.yellow,
    type: colors.cyan,
    markdownQuote: '#c0c0c0'
  },
  ui: {
    cursor: colors.green,
    lineHighlight: colors.brightBlack,
    rangeHighlight: colors.greyOpaque,
    findMatchHighlight: colors.red,
    currentFindMatchHighlight: colors.red,
    selection: colors.greyOpaque,
    selectionHighlight: colors.greyOpaque,
    wordHighlight: colors.greyOpaque,
    wordHighlightStrong: colors.greyOpaque,
  },
  terminal: {
    blue: colors.blue,
    black: colors.grey,
    brightBlack: colors.brightBlack,
    brightBlue: colors.brightBlue,
    brightCyan: colors.brightCyan,
    brightGreen: colors.brightGreen,
    brightMagenta: colors.brightMagenta,
    brightRed: colors.brightRed,
    brightWhite: colors.brightWhite,
    brightYellow: colors.brightYellow,
    cyan: colors.cyan,
    green: colors.cursorGreen,
    magenta: colors.magenta,
    red: colors.red,
    white: colors.white,
    yellow: colors.yellow
  },
  overrides: {
    'activityBar.background': colors.background,
    'editor.lineHighlightBackground': "#323232",
    'editor.lineHighlightBorder': "#323232",
    'editorCursor.background': colors.white,
    'editorCursor.foreground': colors.cursorGreen,
    'editorGutter.deletedBackground': colors.brightRed,
    'editorGutter.modifiedBackground': colors.green,
    'statusBar.background': colors.background,
    'terminal.background': colors.background,
    'terminal.foreground': colors.white,
    'terminalCursor.foreground': colors.cursorGreen,
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
