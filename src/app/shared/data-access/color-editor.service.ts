import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';
import { Color } from '../model/color.model';

@Injectable({
  providedIn: 'root',
})
export class ColorEditorService {
  private readonly _dialog = inject(Dialog);
  private readonly _isModalOpen = signal(false);

  public async openColorEditor(
    color: Color,
    shadeIndex?: number
  ): Promise<Color | undefined> {
    if (this._isModalOpen()) {
      return;
    }
    this._isModalOpen.set(true);

    const editor = await import('../../editor/editor.component').then(
      (c) => c.EditorComponent
    );
    const dialogRef = this._dialog.open<Color | undefined>(editor, {
      backdropClass: 'rp-modal-backdrop',
      data: {
        color,
        shadeIndex,
      },
      disableClose: true,
    });

    return await firstValueFrom(
      dialogRef.closed.pipe(tap(() => this._isModalOpen.set(false)))
    );
  }
}