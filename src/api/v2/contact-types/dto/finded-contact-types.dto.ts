import { ApiProperty } from '@nestjs/swagger';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import ContactTypeWithIdDto from './contact-type-with-id.dto';

export default class FindedContactTypesDto extends BaseApiResponseDto {
  @ApiProperty({ type: [ContactTypeWithIdDto] })
  data: ContactTypeWithIdDto[];
}
