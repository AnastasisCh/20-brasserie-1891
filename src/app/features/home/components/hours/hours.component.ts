import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoursComponent {
  readonly lang = inject(LangService);
}
