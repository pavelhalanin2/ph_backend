import { ApiProperty } from '@nestjs/swagger';
import CurrencyWithIdDto from './currency-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class FindedCurrencyDto extends BaseApiResponseDto {
  @ApiProperty({ type: CurrencyWithIdDto })
  data: CurrencyWithIdDto;
}
