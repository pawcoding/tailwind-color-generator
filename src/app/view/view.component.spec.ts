import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  ColorEditorService,
  ColorEditorServiceMock,
} from '../editor/data-access/color-editor.service';
import { ExportModalService } from '../export/data-access/export-modal.service';
import {
  ColorService,
  ColorServiceMock,
  DialogService,
  DialogServiceMock,
  PaletteService,
  PaletteServiceMock,
  ToastService,
  ToastServiceMock,
} from '../shared/data-access';
import { Color, Shade } from '../shared/model';
import { sleep } from '../shared/utils/sleep';
import ViewComponent from './view.component';

describe('ViewComponent', () => {
  let colorEditorService: ColorEditorServiceMock;
  let colorService: ColorServiceMock;
  let dialogService: DialogServiceMock;
  let exportModalService = jasmine.createSpyObj('ExportModalService', [
    'openExportModal',
  ]);
  let paletteService: PaletteServiceMock;
  let toastService: ToastServiceMock;

  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    colorEditorService = new ColorEditorServiceMock();
    colorService = new ColorServiceMock();
    dialogService = new DialogServiceMock();
    paletteService = new PaletteServiceMock();
    toastService = new ToastServiceMock();

    await TestBed.configureTestingModule({
      imports: [ViewComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {} } },
        { provide: ColorEditorService, useValue: colorEditorService },
        { provide: ColorService, useValue: colorService },
        { provide: DialogService, useValue: dialogService },
        { provide: ExportModalService, useValue: exportModalService },
        { provide: PaletteService, useValue: paletteService },
        { provide: ToastService, useValue: toastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open palette rename dialog', async () => {
    spyOn(dialogService, 'prompt').and.callThrough();
    spyOn(toastService, 'showToast').and.callThrough();

    await component.renamePalette();

    expect(dialogService.prompt).toHaveBeenCalledTimes(1);
    expect(toastService.showToast).toHaveBeenCalledTimes(1);
  });

  it('should save palette', async () => {
    spyOn(paletteService, 'savePaletteToLocalStorage').and.callThrough();
    spyOn(toastService, 'showToast').and.callThrough();

    await component.savePalette();

    expect(paletteService.savePaletteToLocalStorage).toHaveBeenCalledTimes(1);

    await sleep(3100);
    expect(toastService.showToast).toHaveBeenCalledTimes(1);
  });

  it('should open color rename dialog', async () => {
    spyOn(dialogService, 'prompt').and.callThrough();
    spyOn(toastService, 'showToast').and.callThrough();

    const color = new Color([Shade.random()], 'Color');
    await component.renameColor(color);

    expect(color.name).toBe('Color_test');
    expect(dialogService.prompt).toHaveBeenCalledTimes(1);
    expect(toastService.showToast).toHaveBeenCalledTimes(1);
  });

  it('should confirm color delete', async () => {
    spyOn(dialogService, 'confirm').and.callThrough();
    spyOn(toastService, 'showToast').and.callThrough();

    const color = new Color([Shade.random()], 'Color');
    await component.removeColor(color);

    expect(dialogService.confirm).toHaveBeenCalledTimes(1);
    expect(toastService.showToast).toHaveBeenCalledTimes(1);
  });

  it('should open color editor on color edit', async () => {
    spyOn(colorEditorService, 'openColorEditor').and.callThrough();

    const color = new Color([Shade.random()], 'Test');
    await component.editColor(color, 5);

    expect(colorEditorService.openColorEditor).toHaveBeenCalledTimes(1);
    expect(colorEditorService.openColorEditor).toHaveBeenCalledWith(color, 5);
  });

  it('should add random color', async () => {
    spyOn(colorService, 'randomColor').and.callThrough();

    await component.addColor();

    expect(colorService.randomColor).toHaveBeenCalledTimes(1);
  });

  it('should open export modal', async () => {
    await component.exportPalette();

    expect(exportModalService.openExportModal).toHaveBeenCalledTimes(1);
  });

  it('should show toast on clipboard copy', async () => {
    spyOn(toastService, 'showToast').and.callThrough();

    await component.copyToClipboard(Shade.random());

    expect(toastService.showToast).toHaveBeenCalledTimes(1);
  });
});
