import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent }         from './components/hero/hero.component';
import { AboutComponent }        from './components/about/about.component';
import { MenuComponent }         from './components/menu/menu.component';
import { GalleryComponent }      from './components/gallery/gallery.component';
import { HoursComponent }        from './components/hours/hours.component';
import { ContactComponent }      from './components/contact/contact.component';
import { CtaComponent }          from './components/cta/cta.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent,
    HoursComponent,
    ContactComponent,
    ReservationsComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
