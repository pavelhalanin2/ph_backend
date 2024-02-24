import { ApiProperty } from '@nestjs/swagger';
import ItemDto from './item.dto';

export default class ItemWithIdDto extends ItemDto {
  @ApiProperty()
  dp_ref: string;
}
