import { Component, inject } from '@angular/core'
import { StorageService } from '../../services/storage.service'
import { languageToCountryCode } from '../../utils/language-to-countrycode.util'
import { LANGUAGES } from '../../constants/languages.constant'
import { MatomoTracker } from 'ngx-matomo-client'

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  protected readonly LANGUAGES = LANGUAGES
  protected readonly languageToCountryCode = languageToCountryCode

  private readonly _storage = inject(StorageService)
  private readonly _tracker = inject(MatomoTracker)

  protected readonly language = this._storage.language
  protected showMenu = false

  /**
   * Switch the language of the app.
   * @param language
   */
  protected switchLanguage(language: string) {
    this._storage.setLanguage(language)
    this.showMenu = false
    this._tracker.trackPageView()
  }
}
