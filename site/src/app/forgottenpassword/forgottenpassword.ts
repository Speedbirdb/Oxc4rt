import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgottenpassword',
  imports: [RouterModule, FormsModule],
  templateUrl: './forgottenpassword.html',
  styleUrl: './forgottenpassword.scss'
})
export class Forgottenpassword {
  
  email: string = '';

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  isFormValid(): boolean {
    return this.email.length > 0 && this.isValidEmail();
  }

  onSubmit(): void {
    if (this.isFormValid()){}
  }
}
