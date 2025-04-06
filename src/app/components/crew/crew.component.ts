import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Crew } from '../../models/crew.models';

@Component({
  selector: 'app-crew',
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
  private readonly DataService = inject(DataService);

  crew: Crew[] = [];
  currentCrewMember!: Crew;

  constructor() {
    this.DataService.getCrewData()
      .subscribe((data) => {
        this.crew = data;
        console.log('crew:', this.crew);
        this.currentCrewMember = this.crew[0];
      }
      );
  }

// Seleccionamos primer tripulante por defecto al inicializar el componente
  ngOnInit() {
    this.currentCrewMember = this.crew[0];
  }

// Para saber el tripulante que se selecciona
  selectCrewMember(crewMember: Crew) {
    this.currentCrewMember = crewMember;
  }
// TO DO: desuscribirse del observable
}
