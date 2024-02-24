import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import PH_CTL_Items from 'src/typeorm/entities/PH_CTL_Items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_Items])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
