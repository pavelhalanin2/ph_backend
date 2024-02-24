import { ApiProperty } from '@nestjs/swagger';
import PublicContactDto from './public-contact.dto';

export default class PublicContactWithIdDto extends PublicContactDto {
  @ApiProperty()
  dp_ref: string;
}
