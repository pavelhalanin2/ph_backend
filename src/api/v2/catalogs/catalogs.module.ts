import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';
import PH_DOC_Catalogs from 'src/typeorm/entities/PH_DOC_Catalogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_DOC_Catalogs])],
  controllers: [CatalogsController],
  providers: [CatalogsService],
})
export class CatalogsModule {}
