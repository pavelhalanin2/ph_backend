import { ApiProperty } from '@nestjs/swagger';

export default class BaseApiResponseDto {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: any;
}
