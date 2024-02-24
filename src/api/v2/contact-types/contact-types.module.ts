import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactTypesService } from './contact-types.service';
import { ContactTypesController } from './contact-types.controller';
import PH_CTL_ContactTypes from 'src/typeorm/entities/PH_CTL_ContactTypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_ContactTypes])],
  controllers: [ContactTypesController],
  providers: [ContactTypesService],
})
export class ContactTypesModule {}
