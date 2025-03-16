import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TechnologyComponent } from './components/technology/technology.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'crew', component: CrewComponent },
    { path: 'technology', component: TechnologyComponent },
];
