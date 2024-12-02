import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users: any[] = []; 

  constructor() {}

  register(username: string,  password: string): boolean {
    const user = { username, password };
    this.users.push(user);
    console.log('Utilisateur enregistré :', user);
    console.log('Liste des utilisateurs :', this.users);
    return true; 
  }

  getUsers(): any[] {
    return this.users; 
  }
}
