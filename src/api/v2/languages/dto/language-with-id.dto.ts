import { ApiProperty } from '@nestjs/swagger';
import LanguageDto from './language.dto';

export default class LanguageWithIdDto extends LanguageDto {
  @ApiProperty()
  dp_ref: string;
}
