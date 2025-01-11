import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AboutPageComponent } from '../components/about-page/about-page.component';
import { CoursesPageComponent } from '../components/courses-page/courses-page.component';
import { MaterialsPageComponent } from '../components/materials-page/materials-page.component';
import { ContactPageComponent } from '../components/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gabriela', component: AboutPageComponent },
  { path: 'cursuri', component: CoursesPageComponent },
  { path: 'materiale', component: MaterialsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
