import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    { name: 'Home', index: '00', route: '/home' },
    { name: 'Destination', index: '01', route: '/destinations' },
    { name: 'Crew', index: '02', route: '/crew' },
    { name: 'Technology', index: '03', route: '/technology' },
    // { name: 'Contact', index: '04', link: '/contact' }
  ]
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
