import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LightSwitchComponent } from './light-switch.component'
import { TranslateModule } from '@ngx-translate/core'
import { StorageService } from 'src/app/services/storage.service'
import { StorageServiceMock } from 'src/app/mocks/storage.service.mock'

describe('LightSwitchComponent', () => {
  let component: LightSwitchComponent
  let fixture: ComponentFixture<LightSwitchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightSwitchComponent],
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: StorageService, useClass: StorageServiceMock }],
    }).compileComponents()

    fixture = TestBed.createComponent(LightSwitchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
