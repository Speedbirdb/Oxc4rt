import { Component } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-signin',
  imports: [RouterModule, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {

  email: string = '';
  password: string = '';
  message: string = '';
  isLoading: boolean = false;

  constructor(private authService: Auth, private router: Router) {}

  isFormValid(): boolean {
    return this.email.length > 0 && 
    this.password.length > 5 &&
    this.isValidEmail();
  }

  onSubmit(): void {
    if (this.isFormValid()){}
  }
  
  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
