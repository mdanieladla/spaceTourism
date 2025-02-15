import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [NgClass, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    { name: 'Home', index: '00', link: '/home' },
    { name: 'Destination', index: '01', link: '/destination' },
    { name: 'Crew', index: '02', link: '/crew' },
    { name: 'Technology', index: '03', link: '/technology' },
    { name: 'Contact', index: '04', link: '/contact' }
  ]
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
