import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'site';

  onSignin() {
    console.log('Signin attempted')
    //remaining logic for implementation
  }
  onSignUp() {
    console.log('Signup attempted')
    // remaining logic
  }
}
