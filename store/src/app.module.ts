import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmailservModule } from './emailserv/emailserv.module';
import { DatabaseconModule } from './databasecon/databasecon.module';

@Module({
  imports: [AuthModule, UserModule, EmailservModule, DatabaseconModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
