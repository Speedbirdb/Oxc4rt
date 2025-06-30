import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() body: { email: string; password: string }) {
        try {
            return await this.authService.signup(body.email, body.password);
        } catch (error) {
            return { error: error.message };
        }
    }

    @Post('verify')
    async verify(@Body() body: { email: string; code: string }) {
        try {
            return await this.authService.verifyCode(body.email, body.code);
        } catch (error) {
            return { error: error.message };
        }
    }

    @Post('signin')
    async signin(@Body() body: { email: string; password: string }) {
        try {
            return await this.authService.signin(body.email, body.password);
        } catch (error) {
            return { error: error.message };
        }
    }
}
