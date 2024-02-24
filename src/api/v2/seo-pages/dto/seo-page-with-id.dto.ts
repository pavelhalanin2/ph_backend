import { ApiProperty } from '@nestjs/swagger';
import SEOPageDto from './seo-page.dto';

export default class SEOPageWithIdDto extends SEOPageDto {
  @ApiProperty()
  dp_ref: string;
}
