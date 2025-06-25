import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/oxc4rt'),
    ],
    exports: [MongooseModule],
})
export class DatabaseconModule {}
