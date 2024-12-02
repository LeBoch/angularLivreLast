import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {}

  ngOnInit(): void {
    this.signupFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    });
  }

  signup() {
    const username = this.signupFormGroup.value.username;
    const password = this.signupFormGroup.value.password;

    const isRegistered = this.authService.register(username, password); 
    if (isRegistered) {
      console.log('Inscription réussie');
      this.router.navigateByUrl('/login'); 
    }
  }
}
