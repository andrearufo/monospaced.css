# monospaced.css

[![License: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)](LICENSE)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/andrearufo/monospaced.css/badge)](https://www.jsdelivr.com/package/gh/andrearufo/monospaced.css)

A super simple, monospaced, flat stylesheet for simple pages. Write plain HTML, drop in one file, done.

**[Live demo →](https://andrearufo.github.io/monospaced.css/)**

- ~4.5 KB minified, no JavaScript
- Monospaced typography ([IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)) with Markdown-like `#` headings
- Automatic dark mode via `prefers-color-scheme`
- Themeable at runtime with CSS custom properties, or at build time with Sass variables
- Accessible focus styles and readable contrast

## Install

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/andrearufo/monospaced.css@1.0.0/dist/monospaced.min.css">
```

### Download

Grab [`dist/monospaced.min.css`](dist/monospaced.min.css) (or the unminified [`dist/monospaced.css`](dist/monospaced.css)) and link it in your page.

### Sass

Copy the [`scss/`](scss) folder into your project and import it, optionally overriding the defaults:

```scss
@use 'monospaced' with (
  $link-color: #c0392b,
  $breakpoint: 960px,
  $enable-dark-mode: false
);
```

## Usage

Most elements are styled out of the box. Wrap your content in a `.container`:

```html
<main class="container">
  <h1>Hello</h1>
  <p>Just write HTML.</p>
</main>
```

### Classes

| Class | Description |
| --- | --- |
| `.container` | Centered page wrapper (max width = breakpoint) |
| `.block` | Bottom margin, useful to group form fields |
| `.card` | Bordered box |
| `.alert` | Highlighted message |
| `.btn` | Button look for links (`<button>` gets it automatically) |
| `.text-{left,center,right}` | Text alignment |
| `.text-{left,center,right}-small` | Text alignment below the breakpoint |
| `.text-{left,center,right}-large` | Text alignment from the breakpoint up |
| `.transition` | `transition: all .3s` |

### Theming

Override the custom properties anywhere after the stylesheet:

```css
:root {
  --mono-bg: #fdfdf8;
  --mono-color: #333;
  --mono-light: #eee;      /* code, cards, rules */
  --mono-border: #999;     /* form fields, blockquotes */
  --mono-link: #c0392b;
  --mono-link-hover: #962d22;
  --mono-alert: #ffeaa7;
}
```

## Development

Requires [Node.js](https://nodejs.org/).

```bash
npm install
npm run build   # compiles scss/ to dist/ and copies the minified file to docs/
npm run watch   # rebuilds docs/monospaced.min.css on change; open docs/index.html
```

Edit only the files in `scss/`; `dist/` and `docs/monospaced.min.css` are generated.

## License

[GPL-3.0](LICENSE) © [Andrea Rufo](https://www.andrearufo.it)
