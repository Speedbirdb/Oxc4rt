import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() body: { email: string; password: string }) {
        return this.authService.signup(body.email, body.password);
    }

    @Post('verify')
    async verify(@Body() body: { email: string; code: string }) {
        return this.authService.verifyCode(body.email, body.code);
    }

    @Post('signin')
    async signin(@Body() body: { email: string; password: string }) {
        return this.authService.signin(body.email, body.password);
    }
}
