import { ApiProperty } from '@nestjs/swagger';
import CatalogDto from './catalog.dto';

export default class CatalogWithIdDto extends CatalogDto {
  @ApiProperty()
  dp_ref: string;
}
