import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly lang = inject(LangService);
}
