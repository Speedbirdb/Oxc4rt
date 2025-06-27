import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(email: string, password: string): Promise<User> {
        const user = new this.userModel({ email, password });
        return user.save();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async updateVerificationCode(email: string, code: string): Promise<User | null> {
        return this.userModel.findOneAndUpdate(
            { email },
            { verificationCode: code },
            { new: true }
        ).exec();
    }
}
