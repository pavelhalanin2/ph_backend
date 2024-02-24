import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export default class CatalogDto {
  @ApiProperty()
  @IsString()
  ph_number: string;

  @ApiProperty()
  @IsDateString()
  ph_date: string;

  @ApiProperty()
  @IsBoolean()
  ph_posted: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  ph_deletion_mark: boolean;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsBoolean()
  ph_show: boolean;

  @ApiProperty()
  @IsString()
  ph_file_url: string;
}
