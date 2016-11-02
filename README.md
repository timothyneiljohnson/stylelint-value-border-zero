# stylelint-value-border-zero

[![Build Status](https://travis-ci.org/timothyneiljohnson/stylelint-value-border-zero.svg)](https://travis-ci.org/timothyneiljohnson/stylelint-value-border-zero)

A [stylelint](https://github.com/stylelint/stylelint) custom rule to set a convention of `border: 0` or `border: none`.

This rule will cause stylelint to warn you whenever the preferred convention is not used.

## Installation

```
npm install stylelint-value-border-zero
```

This plugin is compatible with v5.0.1+.

## Details

Both `border: none` and `border: 0` are technically valid, however, many developers feel strongly about setting a convention one way or the other, and following it. That is what this plugin offers.

With the `convention` option set to `'0'`:

```css
a { /* OK */
  border: 0
}

a { /* Not OK */
  border: none
}
```

With the `convention` option set to `'none'`:
```css
a { /* OK */
  border: none
}

a { /* Not OK */
  border: 0
}
```

### This rule applies to the following border properties.

```
border
border-top
border-right
border-bottom
border-left
```

## Usage

Add `"stylelint-value-border-zero"` to your stylelint config `plugins` array, then add `value-border-zero` to your rules, setting the `convention` option to `"0"` or `"none"`.

As follows:

```js
{
  "plugins": [
    "stylelint-value-border-zero"
  ],
  "rules": {
    "plugin/value-border-zero": {
      "convention": "0" // Or "none"
    }
  }
};
```
