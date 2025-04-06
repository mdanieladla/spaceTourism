import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Technology } from '../../models/technology.models';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  private readonly DataService = inject(DataService);

  technology: Technology[] = [];
  currentTechnology!: Technology;

  constructor() {
    this.DataService.getTechnologyData()
      .subscribe((data) => {
        this.technology = data;
        console.log('technology:', this.technology);
        this.currentTechnology = this.technology[0];
      })
  }

// Seleccionamos primer tripulante por defecto al inicializar el componente
  ngOnInit() {
    this.currentTechnology = this.technology[0];
  }

// Para saber la tecnología que se selecciona
  selectTechnology(technology: Technology) {
    this.currentTechnology = technology;
  }

  // TO DO: desuscribirse del observable
}
