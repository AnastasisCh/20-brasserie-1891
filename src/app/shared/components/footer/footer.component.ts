import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../../../core/services/lang.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly lang = inject(LangService);

  scrollTo(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const navbar = document.querySelector<HTMLElement>('app-navbar nav');
    const offset = (navbar?.offsetHeight ?? 70) + 20;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  }
}
