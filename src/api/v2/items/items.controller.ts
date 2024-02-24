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
import { ItemsService } from './items.service';
import CreateItemDto from './dto/create-item.dto';
import UpdateItemDto from './dto/update-item.dto';
import FindedItemDto from './dto/finded-item.dto';
import CreatedItemDto from './dto/created-item.dto';
import FindedItemsDto from './dto/finded-items.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';

@ApiTags('items')
@Controller('v2/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiResponse({ status: 201, type: CreatedItemDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateItemDto) {
    const clear_dto = plainToInstance(CreateItemDto, dto, {
      strategy: 'excludeAll',
    });
    return this.itemsService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedItemsDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.itemsService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedItemDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.itemsService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateItemDto) {
    const clear_dto = plainToInstance(UpdateItemDto, dto, {
      strategy: 'excludeAll',
    });
    return this.itemsService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.itemsService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.itemsService.remove(res, id);
  }
}
