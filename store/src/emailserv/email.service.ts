import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    async sendVerificationEmail(email: string, code: string): Promise<void> {
        console.log(`Sending verification code ${code} to ${email}`);
        // Email implementation will be added later
    }

    generateVerificationCode(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
}