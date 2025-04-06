import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly StorageService = inject(StorageService);

  constructor() { }

// Sign up
  registerUser(user: User): boolean {
    const existingUsers: User[] = this.StorageService.getUsers();
    // Si el usuario ya existe, no lo registramos
    //
    // Si no existe, lo registramos
    return true;
  }

// Login
  login(user: User) {

  }

// Is authenticated
}
