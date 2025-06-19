import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="form-outline">
        <h1>Scheduler</h1>
        <button class="standart-button" routerLink="/signin">Sign in</button>
        <button class="standart-button" routerLink="/signup">Sign up</button>
    </div>
  `,
  styles: []
})
export class Home {
}