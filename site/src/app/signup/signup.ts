import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule],
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

  onSubmit(): void {
    if (this.isFormValid()){
      
    }
  }
}
