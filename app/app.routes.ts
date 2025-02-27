import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServicesComponent } from './services/services.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default Route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  
];
