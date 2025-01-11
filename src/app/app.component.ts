import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavBarComponent,
    FooterComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '⛩️🌸🍥☯🍜';
  isHomeRoute: boolean = false;
  isOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/';
    });
  }

  closeSidenav() {
    this.isOpen = false;
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
