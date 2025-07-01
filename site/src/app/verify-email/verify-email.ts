import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  imports: [FormsModule, RouterModule],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.scss'
})
export class VerifyEmail implements OnInit{
  email: string = '';
  verificationCode: string = '';
  message: string = '';
  isLoading: boolean = false;

  constructor(private authService: Auth, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    // Get email from localStorage (stored during signup)
    this.email = localStorage.getItem('signupEmail') || '';
    
    if (!this.email) {
      this.message = 'No email found. Please sign up first.';
    }
  }
  onVerify(): void {
    if (!this.email || !this.verificationCode) {
      this.message = 'Please enter verification code';
      return;
    }

    this.isLoading = true;
    this.message = '';

    this.authService.verifyCode(this.email, this.verificationCode).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.error) {
          this.message = response.error;
        } else {
          this.message = 'Email verified! Signing you in...';
          // Auto-signin after verification
          this.autoSignin();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.message = 'Verification failed. Please try again.';
      }
    });
  }

  private autoSignin(): void {
    const password = localStorage.getItem('signupPassword');
    if (password) {
      this.authService.signIn(this.email, password).subscribe({
        next: (response) => {
          if (response.error) {
            this.message = 'Verification successful. Please sign in manually.';
            setTimeout(() => this.router.navigate(['/signin']), 2000);
          } else {
            this.message = 'Welcome! Redirecting to scheduler...';
            setTimeout(() => this.router.navigate(['/scheduler']), 2000);
          }
        },
        error: (error) => {
          this.message = 'Verification successful. Please sign in manually.';
          setTimeout(() => this.router.navigate(['/signin']), 2000);
        }
      });
    } else {
      this.message = 'Verification successful. Please sign in.';
      setTimeout(() => this.router.navigate(['/signin']), 2000);
    }
  }
}
