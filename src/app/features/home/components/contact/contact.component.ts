import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeDataService } from '../../../../core/services/cafe-data.service';
import { ContactInfo } from '../../../../core/models/cafe.models';
import { SafeUrlPipe } from '../../../../core/pipes/safe-url.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly info: ContactInfo;
  readonly lang = inject(LangService);

  constructor(private readonly cafeData: CafeDataService) {
    this.info = cafeData.contact;
  }
}
