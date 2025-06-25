import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true})

export class User extends Document{
    @Prop({ required: true, unique: true})
    email: string;
    @Prop({ required: true})
    password: string;
    @Prop({ default: false})
    isVerified: boolean;
    @Prop()
    verificationCode?: string;
    @Prop()
    codeExpiry?: Date;

    
}
export const UserSchema = SchemaFactory.createForClass(User);