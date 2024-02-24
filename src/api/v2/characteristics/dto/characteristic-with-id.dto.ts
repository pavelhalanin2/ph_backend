import { ApiProperty } from '@nestjs/swagger';
import CharacteristicDto from './characteristic.dto';

export default class CharacteristicWithIdDto extends CharacteristicDto {
  @ApiProperty()
  dp_ref: string;
}
