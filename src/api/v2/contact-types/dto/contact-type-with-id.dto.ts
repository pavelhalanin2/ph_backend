import { ApiProperty } from '@nestjs/swagger';
import ContactTypeDto from './contact-type.dto';

export default class ContactTypeWithIdDto extends ContactTypeDto {
  @ApiProperty()
  dp_ref: string;
}
