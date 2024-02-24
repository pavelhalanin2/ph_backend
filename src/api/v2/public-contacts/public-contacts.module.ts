import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicContactsService } from './public-contacts.service';
import { PublicContactsController } from './public-contacts.controller';
import PH_CTL_PublicContacts from 'src/typeorm/entities/PH_CTL_PublicContacts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_PublicContacts])],
  controllers: [PublicContactsController],
  providers: [PublicContactsService],
})
export class PublicContactsModule {}
