import { ApiProperty } from '@nestjs/swagger';
import LanguageWithIdDto from './language-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class CreatedLanguageDto extends BaseApiResponseDto {
  @ApiProperty({ type: LanguageWithIdDto })
  data: LanguageWithIdDto;
}
