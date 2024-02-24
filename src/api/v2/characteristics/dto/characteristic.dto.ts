import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export default class CharacteristicDto {
  @ApiProperty()
  @Expose()
  @IsString()
  ph_code: string;

  @ApiProperty()
  @Expose()
  @IsString()
  ph_description: string;

  @ApiProperty()
  @IsOptional()
  @Expose()
  @IsUUID()
  @IsString()
  ph_parent_ref: string;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  ph_is_folder: boolean;

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
