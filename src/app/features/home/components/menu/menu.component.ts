import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  readonly lang = inject(LangService);
  readonly activeTab = signal<string>('cafe');

  readonly categories = computed(() => this.lang.t().menu.categories);

  readonly activeCategory = computed(() =>
    this.categories().find(c => c.id === this.activeTab()) ?? this.categories()[0]
  );

  setTab(id: string): void {
    this.activeTab.set(id);
  }

  isActive(id: string): boolean {
    return this.activeTab() === id;
  }
}
