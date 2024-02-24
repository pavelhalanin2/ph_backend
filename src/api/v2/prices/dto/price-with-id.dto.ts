import { ApiProperty } from '@nestjs/swagger';
import PriceDto from './price.dto';

export default class PriceWithIdDto extends PriceDto {
  @ApiProperty()
  dp_ref: string;
}
