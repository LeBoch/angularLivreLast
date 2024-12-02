import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username: any;
  public roles: string[] = [];
  public authenticated: boolean = false;

  users: { [key: string]: { password: string; roles: string[] } } = {
    john: { password: 'abcd1234', roles: ['admin'] },
    jane: { password: '1234abcd', roles: ['user'] },
  };

  constructor(private router: Router) {}

  public login(username: string, password: string) {
    if (
      this.users[username] && 
      this.users[username].password === password 
    ) {
      this.username = username;
      this.roles = this.users[username].roles;
      this.authenticated = true;
      return true; 
    } else {
      return false; 
    }
  }

  logout() {
    this.authenticated = false;
    this.username = undefined;
    this.roles = [];
    this.router.navigateByUrl('/login');
  }

  register(username: string, password: string): boolean {
    if (this.users[username]) {
      console.log("Nom d'utilisateur déjà pris");
      return false;
    } else {
      this.users[username] = { password, roles: ['STUDENT'] }; 
      return true;
    }
  }
}
