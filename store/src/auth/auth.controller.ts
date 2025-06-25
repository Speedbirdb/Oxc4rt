import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor() {}

    @Post('signup')
    async signup(@Body() body: { email: string; password: string }) {
        return { message: 'Signup endpoint ready' };
    }

    @Post('verify')
    async verify(@Body() body: { email: string; code: string }) {
        return { message: 'Verify endpoint ready' };
    }
}
