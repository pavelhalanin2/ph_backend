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
import { CatalogsService } from './catalogs.service';
import CreateCatalogDto from './dto/create-catalog.dto';
import UpdateCatalogDto from './dto/update-catalog.dto';
import FindedCatalogDto from './dto/finded-catalog.dto';
import CreatedCatalogDto from './dto/created-catalog.dto';
import FindedCatalogsDto from './dto/finded-catalogs.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';

@ApiTags('catalogs')
@Controller('v2/catalogs')
export class CatalogsController {
  constructor(private readonly catalogService: CatalogsService) {}

  @ApiResponse({ status: 201, type: CreatedCatalogDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateCatalogDto) {
    const clear_dto = plainToInstance(CreateCatalogDto, dto, {
      strategy: 'excludeAll',
    });
    return this.catalogService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedCatalogsDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.catalogService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedCatalogDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.catalogService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateCatalogDto) {
    const clear_dto = plainToInstance(UpdateCatalogDto, dto, {
      strategy: 'excludeAll',
    });
    return this.catalogService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.catalogService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.catalogService.remove(res, id);
  }
}
