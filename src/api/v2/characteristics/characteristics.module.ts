import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicsService } from './characteristics.service';
import { CharacteristicsController } from './characteristics.controller';
import PH_CTL_Characteristics from 'src/typeorm/entities/PH_CTL_Characteristics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_Characteristics])],
  controllers: [CharacteristicsController],
  providers: [CharacteristicsService],
})
export class CharacteristicsModule {}
