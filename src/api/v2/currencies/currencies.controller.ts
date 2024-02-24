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
import { CurrenciesService } from './currencies.service';
import CreateCurrencyDto from './dto/create-currency.dto';
import UpdateCurrencyDto from './dto/update-currency.dto';
import FindedCurrencyDto from './dto/finded-currency.dto';
import CreatedCurrencyDto from './dto/created-currency.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';
import FindedCurrenciesDto from './dto/finded-currencies.dto';

@ApiTags('currencies')
@Controller('v2/currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @ApiResponse({ status: 201, type: CreatedCurrencyDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateCurrencyDto) {
    const clear_dto = plainToInstance(CreateCurrencyDto, dto, {
      strategy: 'excludeAll',
    });
    return this.currenciesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedCurrenciesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.currenciesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedCurrencyDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.currenciesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateCurrencyDto) {
    const clear_dto = plainToInstance(UpdateCurrencyDto, dto, {
      strategy: 'excludeAll',
    });
    return this.currenciesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.currenciesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.currenciesService.remove(res, id);
  }
}
