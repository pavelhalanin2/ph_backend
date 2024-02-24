import { ApiProperty } from '@nestjs/swagger';
import CertificateDto from './certificate.dto';

export default class CertificateWithIdDto extends CertificateDto {
  @ApiProperty()
  dp_ref: string;
}
