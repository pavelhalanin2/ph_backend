import { ApiProperty } from '@nestjs/swagger';

export default class ShowDto {
  @ApiProperty()
  ph_show: boolean;
}
