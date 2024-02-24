import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
  Put,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import ShowDto from 'src/dto/Show.dto';
import { SEOPagesService } from './seo-pages.service';
import CreateSEOPageDto from './dto/create-seo-page.dto';
import UpdateSEOPageDto from './dto/update-seo-page.dto';
import FindedSEOPageDto from './dto/finded-seo-page.dto';
import CreatedSEOPageDto from './dto/created-seo-page.dto';
import FindedSEOPagesDto from './dto/finded-seo-pages.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';

@ApiTags('seo-pages')
@Controller('v2/seo-pages')
export class SEOPagesController {
  constructor(private readonly seoPagesService: SEOPagesService) {}

  @ApiResponse({ status: 201, type: CreatedSEOPageDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateSEOPageDto) {
    const clear_dto = plainToInstance(CreateSEOPageDto, dto, {
      strategy: 'excludeAll',
    });
    return this.seoPagesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedSEOPagesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.seoPagesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedSEOPageDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.seoPagesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateSEOPageDto) {
    const clear_dto = plainToInstance(UpdateSEOPageDto, dto, {
      strategy: 'excludeAll',
    });
    return this.seoPagesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.seoPagesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.seoPagesService.remove(res, id);
  }
}
