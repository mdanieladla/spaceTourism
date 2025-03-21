import { Component, inject } from '@angular/core';
import { DestinationsService } from '../../services/destinations.service';
import { provideHttpClient } from '@angular/common/http';
import { Destinations } from '../../models/destinations.model';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  private readonly DestinationsService = inject(DestinationsService);

  destinations: Destinations[] = [];
  currentDestination: Destinations = this.destinations[0];

  constructor() {
    this.DestinationsService.getDestinations()
      .subscribe((data) => {
        this.destinations = data;
        console.log('hola, data:', this.destinations);
        this.currentDestination = this.destinations[0];
      });
  }

  // Para saber el destino actual
  currentDestinationSelected(destination: Destinations) {
    console.log('currentDestinationClicked', destination);
   
  }

  // TO DO: desuscribirse del observable

}
