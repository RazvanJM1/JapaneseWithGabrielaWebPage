import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-materials-page',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './materials-page.component.html',
  styleUrl: './materials-page.component.sass'
})
export class MaterialsPageComponent {

}
