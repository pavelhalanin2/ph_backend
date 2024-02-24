import { ApiProperty } from '@nestjs/swagger';
import ItemWithIdDto from './item-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class FindedItemDto extends BaseApiResponseDto {
  @ApiProperty({ type: ItemWithIdDto })
  data: ItemWithIdDto;
}
