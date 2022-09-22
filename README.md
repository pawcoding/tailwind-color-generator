# Color Palette Generator

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/pawcoding/tailwind-color-generator/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/live--demo-online-blue)](https://colors.apps.pawcode.de)
![Version](https://img.shields.io/badge/version-0.1.0-orange)

This webapp helps you to generate your own color palette for websites and other projects.
You can have palettes generated by different algorithms, choose from suggested ones or create your own.
In addition, the website offers tools to try out the colors directly online and to export them directly into your project.

![Screenshot](/assets/screenshot.png)

If you have further ideas for the tool or would like to contribute yourself, please visit my [Discord](https://discord.gg/GzgTh4hxrx) server.
All suggestions are discussed there, tasks are distributed and help is offered.

## Roadmap
| Status | Version | Features                                                |
|--------|---------|---------------------------------------------------------|
| 🟩     | `0.0.1` | Calculate between color models                          |
| 🟩     | `0.0.2` | Generate shades for every color                         |
| 🟩     | `0.0.3` | Pick custom shade and generate other shades for color   |
| 🟩     | `0.0.4` | Add custom color to palette / remove color from palette |
| 🟩     | `0.0.5` | Adjust colors from palette                              |
| 🟩     | `0.1.0` | Export palette for plain CSS, Tailwind                  |
| 🟥     | `0.1.1` | Adjust every shade                                      |
| 🟥     | `0.1.2` | Improved algorithm for color generation                 |
| 🟥     | `0.2.0` | Redesign                                                |

### ToDo's for Version 0.1.2
- [ ] Favicon Draft
- [x] Distinction between generated and fixed shadows
  - [x] Improved shade interpolation with multiple fixed shades
  - [x] Editor for color shades
- [ ] MDX-Stories for Storybook
- [ ] Karma Tests for every class
- [x] Improved algorithm for color generation

### Side features
- [x] Random color palette
- [x] Light & dark mode
- [x] Mobile view
- [x] Save palette in local storage
- [x] Sort colors by hue
- [ ] Add [MDX-Stories for Storybook](https://storybook.js.org/docs/react/writing-docs/mdx)
- [ ] GitHub Action for automatic release update
- [ ] Provide exemplary components for preview
- [ ] Preview palette in uploaded SVGs
- [ ] Provide prefabricated palettes
- [ ] Generate color palette from images
- [ ] Generate full color palette from just a single color
- [ ] Database storage for sharing palettes

### Support for color formats

| From \ To | HEX | RGB | HSL | HSV | CMYK |
|-----------|-----|-----|-----|-----|------|
| **HEX**   |     | 🟩  | 🟨  | 🟨  | 🟥  |
| **RGB**   | 🟩  |     | 🟩  | 🟨  | 🟥  |
| **HSL**   | 🟨  | 🟩  |     | 🟩  | 🟥  |
| **HSV**   | 🟨  | 🟨  | 🟩  |     | 🟥  |
| **CMYK**  | 🟥  | 🟥  | 🟥  | 🟥  |     |

🟩: Direct conversion
🟨: Indirect conversion
🟥: No conversion implemented

## License
[MIT](https://github.com/pawcoding/tailwind-color-generator/blob/main/LICENSE)

## Author
Luis Wolf &lt;development@pawcode.de&gt;
