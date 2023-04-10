# Rainbow Palette

[![GitHub](https://img.shields.io/github/license/pawcoding/rainbow-palette?color=brightgreen)](https://github.com/pawcoding/rainbow-palette/blob/main/LICENSE)
![Version](https://img.shields.io/badge/version-0.2.0-orange)
![Pipeline Checks](https://img.shields.io/github/actions/workflow/status/pawcoding/rainbow-palette/test.yaml?branch=main)
[![Discord](https://badgen.net/discord/members/GzgTh4hxrx)](https://discord.gg/GzgTh4hxrx)

[![Live Demo](https://img.shields.io/badge/live--demo-blue)](https://colors.apps.pawcode.de)
[![Live Demo](https://img.shields.io/badge/storybook-deeppink)](https://www.chromatic.com/library?appId=6433ad418729acb1feba1f24)

This webapp helps you to generate your own color palette for websites and other projects.
You can have palettes generated by different algorithms, choose from suggested ones or create your own.
In addition, the website offers tools to try out the colors directly online and to export them directly into your project.

![Screenshot](/assets/screenshot_dark.png)

If you have further ideas for the tool or would like to contribute yourself, please visit my [Discord](https://discord.gg/GzgTh4hxrx) server.
All suggestions are discussed there, tasks are distributed and help is offered.

## Roadmap

| Status | Version | Features                                       |
| ------ | ------- | ---------------------------------------------- |
| 🟩     | `0.1.0` | Export Palette                                 |
| 🟩     | `0.1.1` | Adjust Color Shades                            |
| 🟩     | `0.1.2` | Redesign                                       |
| 🟩     | `0.1.3` | Progressive Web App                            |
| 🟩     | `0.1.4` | Instructions & New Icons                       |
| 🟩     | `0.2.0` | Improved Algorithms                            |
| 🟥     | `0.2.1` | Adjust colors in other formats (RGB, HSV, ...) |
| 🟥     | `0.2.2` | Import existing palettes from files            |
| 🟥     | `0.3.0` | Exemplary web components to preview palette    |
| 🟥     | `0.3.1` | Provide prefabricated color palettes           |
| 🟥     | `0.3.2` | Generate color palette from images             |

### Side features

- [ ] Add [MDX-Stories for Storybook](https://storybook.js.org/docs/react/writing-docs/mdx)
- [ ] Karma tests for classes
- [ ] Preview palette in uploaded SVGs
- [ ] Database storage for sharing palettes

### Support for color formats

| From \ To | HEX | RGB | HSL | HSV | CMYK |
| --------- | --- | --- | --- | --- | ---- |
| **HEX**   |     | 🟩  | 🟨  | 🟨  | 🟨   |
| **RGB**   | 🟩  |     | 🟩  | 🟨  | 🟩   |
| **HSL**   | 🟨  | 🟩  |     | 🟩  | 🟨   |
| **HSV**   | 🟨  | 🟨  | 🟩  |     | 🟨   |
| **CMYK**  | 🟨  | 🟩  | 🟨  | 🟨  |      |

🟩: Direct conversion  
🟨: Indirect conversion  
🟥: No conversion implemented

## License

[MIT](https://github.com/pawcoding/tailwind-color-generator/blob/main/LICENSE)

## Author

Luis Wolf &lt;development@pawcode.de&gt;
