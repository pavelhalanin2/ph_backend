import { ApiProperty } from '@nestjs/swagger';
import BaseApiResponseDto from './BaseApiResponse.dto';

class PaginationDto {
  @ApiProperty()
  current_page: number;

  @ApiProperty()
  last_page: number;

  @ApiProperty()
  take_items: number;

  @ApiProperty()
  skip_items: number;

  @ApiProperty()
  total_items: number;
}

export default class BasePaginationApiResponseDto extends BaseApiResponseDto {
  @ApiProperty()
  pagination: PaginationDto;
}
