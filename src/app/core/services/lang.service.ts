import { Injectable, computed, signal } from '@angular/core';
import { Lang, Translations, translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly storageKey = 'brasserie-1891-lang';
  readonly current = signal<Lang>(this.loadSaved());
  readonly t = computed<Translations>(() => translations[this.current()]);

  toggle(): void {
    const next: Lang = this.current() === 'en' ? 'el' : 'en';
    this.current.set(next);
    localStorage.setItem(this.storageKey, next);
  }

  private loadSaved(): Lang {
    const saved = localStorage.getItem(this.storageKey);
    return saved === 'el' ? 'el' : 'en';
  }
}
