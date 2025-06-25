import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signup(email: string, password: string) {
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = await this.userService.create(email, password);
        const verificationCode = this.generateCode();
        await this.userService.updateVerificationCode(email, verificationCode);

        return { message: 'User created successfully', email };
    }

    async verifyCode(email: string, code: string) {
        const user = await this.userService.findByEmail(email);
        if (!user || user.verificationCode !== code) {
            throw new Error('Invalid verification code');
        }

        return { message: 'Email verified successfully' };
    }

    private generateCode(): string {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
}