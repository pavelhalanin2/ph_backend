import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import PH_CTL_Currencies from 'src/typeorm/entities/PH_CTL_Currencies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_Currencies])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
})
export class CurrenciesModule {}
