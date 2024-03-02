import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, computed, inject, signal } from '@angular/core';
import { Color } from '../shared/model/color.model';
import { ColorInputComponent } from '../shared/ui/color-input/color-input.component';

@Component({
  selector: 'rp-editor',
  standalone: true,
  imports: [ColorInputComponent],
  templateUrl: './editor.component.html',
})
export class EditorComponent {
  public readonly data = inject<{ color: Color; shadeIndex?: number }>(
    DIALOG_DATA
  );

  protected readonly color = signal(this.data.color);
  protected readonly shadeIndex = signal(this.data.shadeIndex ?? 0);

  protected readonly shade = computed(() => {
    return this.color().shades[this.shadeIndex()];
  });
}
