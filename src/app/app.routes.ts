import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { TripsComponent } from './components/trips/trips.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'crew', component: CrewComponent },
    { path: 'technology', component: TechnologyComponent },
    { path: 'trips', component: TripsComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }
];
