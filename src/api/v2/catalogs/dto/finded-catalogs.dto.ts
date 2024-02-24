import { ApiProperty } from '@nestjs/swagger';
import CatalogWithIdDto from './catalog-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class FindedCatalogsDto extends BaseApiResponseDto {
  @ApiProperty({ type: [CatalogWithIdDto] })
  data: CatalogWithIdDto[];
}
