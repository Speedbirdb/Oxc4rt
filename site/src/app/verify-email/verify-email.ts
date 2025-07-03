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
    this.email = localStorage.getItem('signupEmail') || '';
    
    if (!this.email) {
      this.message = 'No email found. Please sign up first.';
    }
  }
  onVerify(): void {
    if (!this.verificationCode) return;

    this.isLoading = true;
    
    this.authService.verifyCode(this.email, this.verificationCode).subscribe({
      next: (response) => {
        if (response.error) {
          this.isLoading = false;
          // Just reset - user can try again
        } else {
          // Success - auto signin and navigate
          this.autoSignin();
        }
      },
      error: (error) => {
        this.isLoading = false;
        // Just reset - user can try again
      }
    });
  }


  private autoSignin(): void {
    const password = localStorage.getItem('signupPassword');
    if (password) {
      this.authService.signIn(this.email, password).subscribe({
        next: (response) => {
          this.router.navigate(['/scheduler']);
        },
        error: (error) => {
          this.router.navigate(['/signin']);
        }
      });
    } else {
      this.router.navigate(['/signin']);
    }
  }

}
