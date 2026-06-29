import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeDataService } from '../../../../core/services/cafe-data.service';
import { GalleryImage } from '../../../../core/models/cafe.models';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  readonly images: GalleryImage[];
  readonly lang = inject(LangService);

  constructor(private readonly cafeData: CafeDataService) {
    this.images = cafeData.gallery;
  }
}
