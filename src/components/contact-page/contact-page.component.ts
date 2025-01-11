import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.sass'
})
export class ContactPageComponent {

}
