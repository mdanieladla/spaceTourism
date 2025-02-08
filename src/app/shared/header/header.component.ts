import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    { name: 'Home', index: 0, link: '/home' },
    { name: 'Destination', index: 1, link: '/destination' },
    { name: 'Crew', index: 2, link: '/crew' },
    { name: 'Technology', index: 3, link: '/technology' },
    { name: 'Contact', index: 4, link: '/contact' }
  ]
  
}
