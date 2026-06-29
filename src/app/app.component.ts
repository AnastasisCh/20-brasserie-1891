import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
@Component({ selector: 'app-root', standalone: true, imports: [NavbarComponent, HomeComponent, FooterComponent], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent { readonly title = 'brasserie-1891'; }
