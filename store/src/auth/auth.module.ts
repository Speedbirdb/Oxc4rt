import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { EmailservModule } from 'src/emailserv/emailserv.module';

@Module({
  imports: [UserModule, EmailservModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
