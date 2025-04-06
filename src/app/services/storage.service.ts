import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

// Get users
  getUsers() {
    console.log('get users');
  }
}
