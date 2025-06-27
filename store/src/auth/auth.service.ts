import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { EmailService } from '../emailserv/email.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private emailService: EmailService) {}

    async signup(email: string, password: string) {
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = await this.userService.create(email, password);
        const verificationCode = this.emailService.generateVerificationCode();
        await this.emailService.sendVerificationEmail(email, verificationCode);
        await this.userService.updateVerificationCode(email, verificationCode);

        return { message: 'User created successfully', email };
    }

    async signin(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        if (!user.isVerified) {
            throw new Error('Please verify your email first');
        }

        // Password comparison logic will be added with bcrypt
        return { message: 'Signin successful', email };
    }

    async verifyCode(email: string, code: string) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.verificationCode !== code) {
            throw new Error('Invalid verification code');
        }

        return { message: 'Email verified successfully' };
    }
    
}