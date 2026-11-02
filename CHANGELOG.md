# Changelog

## 1.0.0 (2026-11-02)

- Build with Dart Sass only; dropped Gulp, node-sass and related dependencies
- Migrated to the Sass module system (`@use`, `sass:color`) with `!default` settings
- Theme colors exposed as CSS custom properties (`--mono-*`)
- Automatic dark mode (disable with `$enable-dark-mode: false`)
- New styles: ordered lists, tables, blockquotes, textareas, checkboxes/radios, `:focus-visible`
- Fixed overlapping `-small`/`-large` breakpoints at exactly 768px
- Fixed form field text clipping and low-contrast field borders
- Lighter Google Fonts request (only used weights, `display=swap`)
- `package.json` license now matches `LICENSE` (GPL-3.0)

## 20200107

- Responsive images

## 0.0.1

- First release
