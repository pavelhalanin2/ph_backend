import { ApiProperty } from '@nestjs/swagger';
import PriceWithIdDto from './price-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class CreatedPriceDto extends BaseApiResponseDto {
  @ApiProperty({ type: PriceWithIdDto })
  data: PriceWithIdDto;
}
