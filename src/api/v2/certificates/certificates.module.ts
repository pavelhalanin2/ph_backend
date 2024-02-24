import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import PH_DOC_Certificates from 'src/typeorm/entities/PH_DOC_Certificates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PH_DOC_Certificates])],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
