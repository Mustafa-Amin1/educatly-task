import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' } , // Default route
    { path: 'home', component: LandingPageComponent },
];
