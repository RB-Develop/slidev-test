# slidev-theme-xebia

A Xebia theme for [Slidev](https://github.com/slidevjs/slidev).

## Install

This is a private package which is not available on NPM. To install, first clone this repo to your machine.

```sh
git clone https://github.com/xebia/presentation-templates.git
# or use ssh
git clone git@github.com:xebia/presentation-templates.git
```

It is not necessary to install NPM dependencies after cloning, as the cloned code
is going to be copied in another project.

After the clone is finished, you have 2 options:

- Create an empty Slidev presentation with the Xebia template (the preferred way)
- Start with a Slidev example project and switch it to the Xebia template

### 1. Create an empty Slidev presentation (preferred)

First create the project:

```sh
# create Node app
mkdir <presentation-name>
cd <presentation-name>
npm install @slidev/cli playwright-chromium
# copy theme
cp -r <path-to-repo-parent>/presentation-templates/slidev-theme-xebia .
```

Then, create a `slides.md` with this initial content:

```
---
theme: ./slidev-theme-xebia
---

# Slidev Xebia presentation

It works!

---

# Second slide

```

Add the following package scripts to the `package.json` file:

```json
{
  "scripts": {
    "dev": "slidev slides.md --open",
    "build": "slidev build slides.md",
    "screenshot": "slidev export slides.md --format png",
    "export": "slidev export slides.md",
    "finalize-pdf": "gs -sDEVICE=pdfimage24 -dDownScaleFactor=3 -dNOPAUSE -dQUIET -dBATCH -sOutputFile=slides-final.pdf slides-export.pdf"
  }
}
```

Then start developing your presentation with:

```sh
npm run dev
```

Look at the [example.md](example.md) file for examples on how to use the theme.

### 2. Start with a Slidev example project (not recommended)

Do a fresh install of the example Slidev project:

```sh
`npm init slidev@latest` <presentation-name>
# installs under ./<presentation-name>
cd <presentation-name>
# copy theme
cp -r <path-to-repo-parent>/presentation-templates/slidev-theme-xebia .
```

The fresh installation of the Slidev project comes with a default presentation
configuration in the 'frontmatter' of the `slides.md` file (see
[Syntax](https://sli.dev/guide/syntax.html) for more details. Update it to point
to the Xebia theme:

<pre><code>---
theme: <b>./slidev-theme-xebia</b>
---</code></pre>

And at least remove the existing config lines (these are set by the theme):

<pre><code>---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shikiji
transition: slide-left
---</code></pre>

If not running, start the presentation with:

```sh
npm run dev
```

The example Slidev project comes with slide contents that is (partially)
incompatible with the Xebia theme. Make sure to clean it up properly!

## Layouts

This theme supports the following layouts:

| Layout | Description |
| --- | --- |
| `cover` | Title slide |
| `cover-dark` | Title slide, dark variant |
| `toc` | Table of contents with image on right |
| `toc-two-column` | Table of contents with two columns |
| `intro` | Speaker introduction |
| `intro-duo` | Speaker introduction with two speakers |
| `default` | Default background, fallback when layout is not specified |
| `two-column` | Two column layout |
| `three-column` | Three column layout |
| `three-column-dark` | Three column layout, dark variant |
| `image-left` | Image on left |
| `image-left-dark` | Image on left, dark variant |
| `image-left-variant` | Image on left, blob variant |
| `image-right` | Image on right |
| `image-right-dark` | Image on right, dark variant |
| `image-right-variant` | Image on right, blob variant |
| `chapter` | In-between slide |
| `thank-you` | Thank you slide |
| `thank-you-dark` | Thank you slide, dark variant |
| `end` | End slide, black sheet |

For details per layout, see the [example.md](example.md) file.

## Customizing

### Defaults

In the `package.json` file, you'll find the defaults for the presentation under 
`"slidev"`. You can override these via the frontmatter configuration. See 
[Customization](https://sli.dev/custom/) in the Slidev docs.

### Code style

This theme uses [Shiki](https://shiki.matsu.io/) as the code highlighter. The 
default highlighting theme is `github-light`. If needed, you can override this 
in the theme folder by editing `slidev-theme-xebia/setup/shiki.ts`. Out 
of the box you can select one of 
[these themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes).

### Dark mode

Dark mode is not supported by this theme, as the Xebia brand does not have a 
dark mode. If you want to show code on a dark background, change the code style 
to `github-dark` (see above).

### Add icons, photos

Download Xebia photos [from here](https://xebiagroup.sharepoint.com/:f:/r/sites/XebiaCreativeService/Gedeelde%20documenten/Design_Space/Xebia_Brand/Brand%20Assets/Photo)
and Xebia icons [from here](https://xebiagroup.sharepoint.com/:f:/r/sites/XebiaCreativeService/Gedeelde%20documenten/Design_Space/Xebia_Brand/Brand%20Assets/Icons).

Create a `public/` folder in the root of your project and refer to these images
in your slides directly from the root `/`. For example:

```md
---
layout: image-left
background: /background-123.jpg
---

<img src="/icon-234.svg" class="w-16 mb-4"/>

![Image description](/image-456.jpg)
```

## Contributing to this theme

You can run the example slide deck and change everything as you see fit.

- First do an `npm install` on this repo
- Then, run `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- Edit the `layouts/*.vue` components to change the layouts
- Global styles can be edited under `styles/`
- Other setup can be altered under `setup/`

### Where to find the CSS classes?

Slidev uses the UnoCSS processor with some 
[customizations](https://sli.dev/custom/config-unocss.html). An easy way to find
CSS classes is by using [UnoCSS Interactive](https://unocss.dev/interactive).
Type in the name of some CSS property and it will show you the CSS classes.

### How to convert shapes from PowerPoint to SVG?

Use the PowerPoint desktop app, select one or more shapes, right click and 
'Save as Picture...'. Then select 'SVG' and save. The SVG that is saved uses
4400x2475 units as the default size.

If you want to place the shape on the exact same spot on a background, do the 
following:

- add  `viewBox="0 0 4400 2475"` to the root `svg` element
- remove any `transform="translate(... ...)"` from the outer group element `<g>`
- flatten the `<g>` elements, so that the `<path>` elements are direct children 
of the root `svg` element

See the `layouts` folder for examples on how to place SVG.

## Exporting to PDF

Export to PDF with the following command:

```sh
npm run export
```

This uses Playwright under the hood, which sometimes fails. Retry a few times
if it fails 🤷.

The file size of the PDF can become quite large, due to 
[Chromium internals](https://github.com/microsoft/playwright/issues/13917). 

To reduce the file size, you can use
[Ghostscript](https://www.ghostscript.com/) to reduce file size of the PDF.

Install Ghostscript on your machine if you haven't done so:

```sh
brew install ghostscript
```

Then write the final PDF with the following command:

```sh
npm run finalize-pdf
```