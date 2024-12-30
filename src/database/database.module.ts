import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        // user: configService.get('MONGODB_USERNAME'),
        // pass: configService.get('MONGODB_PASSWORD'),
        dbName: configService.get('MONGODB_DATABASE'),
      }),
    }),
  ],
})
export class DatabaseModule {}
