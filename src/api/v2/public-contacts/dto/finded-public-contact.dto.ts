import { ApiProperty } from '@nestjs/swagger';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import PublicContactWithIdDto from './public-contact-with-id.dto';

export default class FindedPublicContactDto extends BaseApiResponseDto {
  @ApiProperty({ type: PublicContactWithIdDto })
  data: PublicContactWithIdDto;
}
