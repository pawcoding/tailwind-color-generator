import { Color } from '../../shared/model/color.model';
import { Palette } from '../../shared/model/palette.model';
import { Shade } from '../../shared/model/shade.model';
import { Exporter } from '../interface/exporter';

export class LessExporter implements Exporter {
  filename = 'colors.less';
  mimeType = 'text/less';

  formatFile(palette: Palette): string {
    const content = this.formatPalette(palette);

    return `// Import the variables into your LESS files with\n//\t@import 'colors';\n\n${content}`;
  }

  formatPalette(palette: Palette): string {
    const content = palette.colors
      .map((color) => this.formatColor(color))
      .join('\n\n');

    return `// Color palette generated by ${window.location.origin}\n\n${content}`;
  }

  formatColor(color: Color): string {
    const name = color.name.replace(/\s+/g, '-').toLowerCase();
    const shades = color.shades
      .map((shade) => this.formatShade(shade, name))
      .join('\n');

    return shades;
  }

  formatShade(shade: Shade, name: string): string {
    return `@${name}-${shade.index}:${shade.index < 100 ? ' ' : ''} ${
      shade.hex
    };`;
  }
}
