import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CafeDataService } from '../../../../core/services/cafe-data.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent {
  readonly phone: string;
  readonly phoneHref: string;
  readonly lang = inject(LangService);

  constructor(private readonly cafeData: CafeDataService) {
    this.phone     = cafeData.contact.phone;
    this.phoneHref = cafeData.contact.phoneHref;
  }
}
