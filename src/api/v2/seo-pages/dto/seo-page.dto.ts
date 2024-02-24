import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export default class SEOPageDto {
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

  @ApiProperty()
  @IsString()
  ph_html_title: string;

  @ApiProperty()
  @IsString()
  ph_html_description: string;

  @ApiProperty()
  @IsString()
  ph_html_keywords: string;

  @ApiProperty()
  @IsString()
  ph_html_lang: string;

  @ApiProperty()
  @IsString()
  ph_sitemap_loc: string;

  @ApiProperty()
  @IsDateString()
  ph_sitemap_lastmod: Date;

  @ApiProperty()
  @IsString()
  ph_sitemap_changefreq: string;

  @ApiProperty()
  @IsNumber()
  ph_sitemap_priority: number;

  @ApiProperty()
  @IsUUID()
  ph_language_ref: string;
}
