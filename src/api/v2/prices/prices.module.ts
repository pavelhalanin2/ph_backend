import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import PH_DOC_Prices from 'src/typeorm/entities/PH_DOC_Prices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_DOC_Prices])],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
