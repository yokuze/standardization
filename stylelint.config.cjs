'use strict';

const scssSyntax = require('postcss-scss');

// We are using stylelint-config-standard for all of the base rules designed more broadly
// for CSS. The stylelint-scss plugin provides us with more SCSS specific rules. Those
// rules are prefixed by `scss/`
module.exports = {
   extends: 'stylelint-config-standard',
   plugins: [ 'stylelint-scss', '@stylistic/stylelint-plugin' ],
   customSyntax: scssSyntax,
   rules: {
      // Turn off the following rule since our ltr/rtl approach generally violates it.
      'no-descending-specificity': null,
      // Turn off config-standard rule in favor of the scss/at-rule-no-unknown rule
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
      '@stylistic/indentation': 3,
      '@stylistic/linebreaks': 'unix',
      '@stylistic/no-eol-whitespace': true,
      '@stylistic/no-missing-end-of-source-newline': true,
      '@stylistic/no-empty-first-line': true,
      '@stylistic/max-line-length': [
         140,
         {
            ignorePattern: [ '/https?://[0-9,a-z]*.*/' ],
         },
      ],
      '@stylistic/max-empty-lines': 1,
      '@stylistic/string-quotes': 'single',
      // TODO: Stylelint removed this rule and offered no replacement. Determine if we
      // should write our own.
      '@stylistic/string-no-newline': true,
      '@stylistic/color-hex-case': 'lower',
      // TODO: Stylelint removed this rule and offered no replacement. Determine if we
      // should write our own. '@stylistic/color-hex-length': 'long',
      'color-no-invalid-hex': true,
      'no-invalid-position-at-import-rule': null,
      '@stylistic/number-leading-zero': 'always',
      '@stylistic/number-no-trailing-zeros': true,
      '@stylistic/unit-case': 'lower',
      'unit-no-unknown': true,
      'property-no-unknown': true,
      'block-no-empty': true,
      'value-keyword-case': 'lower',
      // TODO: Stylelint removed this rule and offered no replacement. Determine if we
      // should write our own.
      // '@stylistic/length-zero-no-unit': true,
      '@stylistic/function-comma-space-after': 'always-single-line',
      '@stylistic/function-comma-space-before': 'never',
      '@stylistic/function-parentheses-space-inside': 'never-single-line',
      'function-linear-gradient-no-nonstandard-direction': true,
      // TODO: Stylelint removed this rule and offered no replacement. Determine if we
      // should write our own.
      // 'function-calc-no-invalid': true,
      'function-calc-no-unspaced-operator': true,
      'selector-pseudo-class-no-unknown': true,
      'selector-pseudo-element-no-unknown': true,
      'selector-type-no-unknown': true,
      'declaration-block-no-duplicate-properties': true,
      'declaration-block-no-shorthand-property-overrides': true,
      '@stylistic/declaration-colon-space-after': 'always',
      '@stylistic/declaration-colon-space-before': 'never',
      '@stylistic/declaration-block-trailing-semicolon': 'always',
      // TODO: Stylelint removed this rule and offered no replacement. Determine if we
      // should write our own.
      // '@stylistic/declaration-empty-line-before': 'never',
      'comment-whitespace-inside': 'always',
      'rule-empty-line-before': [
         'always',
         {
            ignore: [ 'after-comment', 'inside-block' ],
         },
      ],
      // Collection of rules for if/else statements
      'at-rule-empty-line-before': [
         'always',
         {
            ignoreAtRules: [ 'else' ],
            ignore: [
               'after-comment',
               'first-nested',
               'inside-block',
               'blockless-after-same-name-blockless',
            ],
         },
      ],
      '@stylistic/block-opening-brace-space-before': 'always',
      '@stylistic/block-closing-brace-newline-after': [
         'always',
         {
            ignoreAtRules: [ 'if', 'else' ],
         },
      ],
      '@stylistic/at-rule-name-space-after': 'always',
      'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
      'scss/at-else-closing-brace-space-after': 'always-intermediate',
      'scss/at-else-empty-line-before': 'never',
      'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
      'scss/at-if-closing-brace-space-after': 'always-intermediate',
      // End collection of rules for if/else statements
      'scss/at-extend-no-missing-placeholder': true,
      'scss/at-function-parentheses-space-before': 'never',
      'scss/at-mixin-parentheses-space-before': 'never',
   },
};
