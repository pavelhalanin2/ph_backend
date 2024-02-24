import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import PH_CTL_Languages from 'src/typeorm/entities/PH_CTL_Languages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_Languages])],
  controllers: [LanguagesController],
  providers: [LanguagesService],
})
export class LanguagesModule {}
