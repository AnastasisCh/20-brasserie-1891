import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { LangService } from '../../../core/services/lang.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    readonly theme: ThemeService,
    readonly lang: LangService
  ) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const scrolled = window.scrollY > 60;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      this.cdr.markForCheck();
    }
  }

  toggleTheme(): void {
    this.theme.toggle();
    this.cdr.markForCheck();
  }

  toggleLang(): void {
    this.lang.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollTo(sectionId: string): void {
    this.closeMenu();
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
