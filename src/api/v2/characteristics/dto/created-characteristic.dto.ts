import { ApiProperty } from '@nestjs/swagger';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import CharacteristicWithIdDto from './characteristic-with-id.dto';

export default class CreatedCharacteristicDto extends BaseApiResponseDto {
  @ApiProperty({ type: CharacteristicWithIdDto })
  data: CharacteristicWithIdDto;
}
