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
  isLoading: boolean = false;

  constructor(private authService: Auth, private router: Router) {}

  isFormValid(): boolean {
    return this.email.length > 0 && 
    this.password.length > 5 &&
    this.isValidEmail();
  }

  message: string = '';

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.message = '';
      
      this.authService.signIn(this.email, this.password).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.error) {
            this.message = response.error;
          } else {
            this.router.navigate(['/scheduler']);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.message = error.error?.message || 'Login failed';
        }
      });
    }
  }
  
  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
