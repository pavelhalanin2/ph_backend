import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { V2Module } from './api/v2/v2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

@Module({
  imports: [
    V2Module,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME || './database/dev-no-env.sqlite',
      entities: [path.join('dist', '**', '*.entity.js')],
      logging: true,
      // logger: 'file',
      // synchronize: false,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
