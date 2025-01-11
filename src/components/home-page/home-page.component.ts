import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {
  public redirectToPage(url: string) {
    window.location.href = url;
  }
}
