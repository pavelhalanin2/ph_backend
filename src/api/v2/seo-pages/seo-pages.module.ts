import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SEOPagesService } from './seo-pages.service';
import { SEOPagesController } from './seo-pages.controller';
import PH_CTL_SEOPages from 'src/typeorm/entities/PH_CTL_SEOPages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_CTL_SEOPages])],
  controllers: [SEOPagesController],
  providers: [SEOPagesService],
})
export class SEOPagesModule {}
