import { ApiProperty } from '@nestjs/swagger';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import CertificateWithIdDto from './certificate-with-id.dto';

export default class CreatedCertificateDto extends BaseApiResponseDto {
  @ApiProperty({ type: CertificateWithIdDto })
  data: CertificateWithIdDto;
}
