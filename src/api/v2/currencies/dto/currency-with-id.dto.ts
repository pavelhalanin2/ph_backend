import { ApiProperty } from '@nestjs/swagger';
import CurrencyDto from './currency.dto';

export default class CurrencyWithIdDto extends CurrencyDto {
  @ApiProperty()
  dp_ref: string;
}
