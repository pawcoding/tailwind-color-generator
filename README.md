# Color Palette Generator

[![GitHub](https://img.shields.io/github/license/pawcoding/tailwind-color-generator?color=brightgreen)](https://github.com/pawcoding/tailwind-color-generator/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/live--demo-online-blue)](https://colors.apps.pawcode.de)
![Version](https://img.shields.io/badge/version-0.1.2-orange)
[![Discord](https://badgen.net/discord/members/GzgTh4hxrx)](https://discord.gg/GzgTh4hxrx)

This webapp helps you to generate your own color palette for websites and other projects.
You can have palettes generated by different algorithms, choose from suggested ones or create your own.
In addition, the website offers tools to try out the colors directly online and to export them directly into your project.

![Screenshot](/assets/screenshot_dark.png)

If you have further ideas for the tool or would like to contribute yourself, please visit my [Discord](https://discord.gg/GzgTh4hxrx) server.
All suggestions are discussed there, tasks are distributed and help is offered.

## Roadmap
| Status | Version | Features                                       |
|--------|---------|------------------------------------------------|
| 🟩     | `0.1.0` | Proof of concept                               |
| 🟩     | `0.1.1` | Adjust every shade                             |
| 🟩     | `0.1.2` | First Redesign                                 |
| 🟥     | `0.1.3` | Create PWA                                     |
| 🟥     | `0.1.4` | Improved algorithm for color generation        |
| 🟥     | `0.1.5` | Improved algorithm for palette generation      |
| 🟥     | `0.1.6` | Adjust colors in other formats (RGB, HSV, ...) |
| 🟥     | `0.2.0` | Exemplary web components to preview palette    |

### Version 0.1.3
- [x] Add PWA package
- [x] Create favicon
- [x] Check settings
  - [x] `package.json`
  - [x] `ngsw-config.json`
  - [x] `manifest.webmanifest`
  - [x] `angular.json`
  - [x] `index.html`
  - [ ] Favicon
  - [ ] Font caching
- [x] Setup hosting for `/edit` with `.htaccess`
- [x] Create `sitemap.xml`
- [x] Check Lighthouse Reports
  - [x] Desktop
  - [x] Mobile
- [x] Check IONOS Website Checker
- [ ] Proper mobile view
- [x] Color-Namer
  - [x] Add dictionary
  - [x] Switch dictionary to CSV format for better loading times (reduced size by 1/3)
- [x] Rename generate button
- [x] Add rainbow scheme
- [x] Reduce icon size
- [ ] Change name
- [x] Fix rounded color input (hopefully fixed. Need confirmation)
- [x] Search font from Google Fonts

### Side features
- [x] Favicon draft
- [ ] Add [MDX-Stories for Storybook](https://storybook.js.org/docs/react/writing-docs/mdx)
- [ ] Karma tests for classes
- [ ] GitHub Action for automatic release update
- [ ] Preview palette in uploaded SVGs
- [ ] Provide prefabricated palettes
- [ ] Generate color palette from images
- [ ] Database storage for sharing palettes
- [ ] Localize with i18n or transloco

### Support for color formats

| From \ To | HEX | RGB | HSL | HSV | CMYK |
|-----------|-----|-----|-----|-----|------|
| **HEX**   |     | 🟩  | 🟨  | 🟨  | 🟨  |
| **RGB**   | 🟩  |     | 🟩  | 🟨  | 🟩  |
| **HSL**   | 🟨  | 🟩  |     | 🟩  | 🟨  |
| **HSV**   | 🟨  | 🟨  | 🟩  |     | 🟨  |
| **CMYK**  | 🟨  | 🟩  | 🟨  | 🟨  |     |

🟩: Direct conversion  
🟨: Indirect conversion  
🟥: No conversion implemented

## License
[MIT](https://github.com/pawcoding/tailwind-color-generator/blob/main/LICENSE)

## Author
Luis Wolf &lt;development@pawcode.de&gt;
