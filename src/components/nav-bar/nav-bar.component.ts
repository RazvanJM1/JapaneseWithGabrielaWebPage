import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})
export class NavBarComponent {
  @Input() isHomeRoute: boolean = false;

  public navLinks = [
    { label: 'Prima pagină', routerLink: '', href: '', routerLinkActiveOptions: { exact: true } },
    { label: 'Despre mine', routerLink: '/gabriela', href: '/gabriela', routerLinkActiveOptions: { exact: true } },
    { label: 'Materiale gratuite', routerLink: '/materiale', href: '/materiale', routerLinkActiveOptions: { exact: true } },
    { label: 'Cursuri', routerLink: '/cursuri', href: '/cursuri', routerLinkActiveOptions: { exact: true } },
    { label: 'Contact', routerLink: '/contact', href: '/contact', routerLinkActiveOptions: { exact: true } }
  ];
}
