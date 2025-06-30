import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth';
import { ActivatedRoute, RouterModule } from '@angular/router';
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

  constructor(private authService: Auth, private route: ActivatedRoute){}

  ngOnInit(): void {
    if (this.verificationCode && this.email) {
      this.isLoading = true;
      this.authService.verifyCode(this.email, this.verificationCode).subscribe({
        next: (response) => [],
        error: (error) => {}
      })
    }
  }
}
