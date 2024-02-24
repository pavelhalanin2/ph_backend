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
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';
import { CharacteristicsService } from './characteristics.service';
import CreateCharacteristicDto from './dto/create-characteristic.dto';
import UpdateCharacteristicDto from './dto/update-characteristic.dto';
import FindedCharacteristicDto from './dto/finded-characteristic.dto';
import CreatedCharacteristicDto from './dto/created-characteristic.dto';
import FindedCharacteristicsDto from './dto/finded-characteristics.dto';

@ApiTags('characteristics')
@Controller('v2/characteristics')
export class CharacteristicsController {
  constructor(
    private readonly characteristicsService: CharacteristicsService,
  ) {}

  @ApiResponse({ status: 201, type: CreatedCharacteristicDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post('one')
  create(@Res() res, @Body() dto: CreateCharacteristicDto) {
    const clear_dto = plainToInstance(CreateCharacteristicDto, dto, {
      strategy: 'excludeAll',
    });
    return this.characteristicsService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedCharacteristicsDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.characteristicsService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedCharacteristicDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.characteristicsService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(
    @Res() res,
    @Param('id') id: string,
    @Body() dto: UpdateCharacteristicDto,
  ) {
    const clear_dto = plainToInstance(UpdateCharacteristicDto, dto, {
      strategy: 'excludeAll',
    });
    return this.characteristicsService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.characteristicsService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.characteristicsService.remove(res, id);
  }
}
