import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  isFormValid(): boolean {
    return this.email.length > 0 && 
           this.password.length > 5 && 
           this.confirmPassword.length > 5 && 
           this.passwordsMatch() &&
           this.isValidEmail();
  }

  message: string = '';
  isLoading: boolean = false;

  constructor(private authService: Auth, private router: Router) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isLoading = true;
      localStorage.setItem('signupEmail', this.email);
      localStorage.setItem('signupPassword', this.password);
      this.authService.signUp(this.email, this.password).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.error) {
            this.message = response.error;
          } else {
            this.message = 'Verification email sent! Check your email.';
            // Navigate to verification page after 2 seconds
            setTimeout(() => {
              this.router.navigate(['/verify-email', 'token']);
            }, 2000);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.message = 'Signup failed. Please try again.';
        }
      });
    }
  }
}
