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
import { PricesService } from './prices.service';
import CreatePriceDto from './dto/create-price.dto';
import UpdatePriceDto from './dto/update-price.dto';
import FindedPriceDto from './dto/finded-price.dto';
import CreatedPriceDto from './dto/created-price.dto';
import FindedPricesDto from './dto/finded-prices.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';

@ApiTags('prices')
@Controller('v2/prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @ApiResponse({ status: 201, type: CreatedPriceDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreatePriceDto) {
    const clear_dto = plainToInstance(CreatePriceDto, dto, {
      strategy: 'excludeAll',
    });
    return this.pricesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedPricesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.pricesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedPriceDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.pricesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdatePriceDto) {
    const clear_dto = plainToInstance(UpdatePriceDto, dto, {
      strategy: 'excludeAll',
    });
    return this.pricesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.pricesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.pricesService.remove(res, id);
  }
}
