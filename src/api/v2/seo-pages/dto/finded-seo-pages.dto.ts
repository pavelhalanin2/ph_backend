import { ApiProperty } from '@nestjs/swagger';
import SEOPageWithIdDto from './seo-page-with-id.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';

export default class FindedSEOPagesDto extends BaseApiResponseDto {
  @ApiProperty({ type: [SEOPageWithIdDto] })
  data: SEOPageWithIdDto[];
}
