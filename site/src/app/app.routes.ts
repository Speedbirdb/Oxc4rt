import { Routes } from '@angular/router';
import { Errorcomponent } from './errorcomponent/errorcomponent';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { Scheduler } from './scheduler/scheduler';
import { Forgottenpassword } from './forgottenpassword/forgottenpassword';
import { VerifyEmail } from './verify-email/verify-email';

export const routes: Routes = [
    { path : '', component: Home},
    { path : 'signin', component: Signin},
    { path : 'signup', component: Signup},
    { path : 'scheduler', component: Scheduler},
    { path : 'forgottenpassword', component: Forgottenpassword},
    { path : 'verify-email/:token', component: VerifyEmail},
    { path : '**', component: Errorcomponent},
];
