import { Routes } from '@angular/router';
import { Errorcomponent } from './errorcomponent/errorcomponent';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { Home } from './home/home';

export const routes: Routes = [
    { path : '', component: Home},
    { path : 'signin', component: Signin},
    { path : 'signup', component: Signup},
    { path : '**', component: Errorcomponent},
];
