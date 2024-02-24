import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export default class CurrencyDto {
  @ApiProperty()
  @Expose()
  @IsString()
  ph_code: string;

  @ApiProperty()
  @Expose()
  @IsString()
  ph_description: string;

  @ApiProperty({default: false})
  @Expose()
  @IsOptional()
  @IsBoolean()
  ph_deletion_mark: boolean;

  @ApiProperty({default: false})
  @Expose()
  @IsOptional()
  @IsBoolean()
  ph_show: boolean;
}
