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
import { LanguagesService } from './languages.service';
import CreateLanguageDto from './dto/create-language.dto';
import UpdateLanguageDto from './dto/update-language.dto';
import FindedLanguageDto from './dto/finded-language.dto';
import CreatedLanguageDto from './dto/created-language.dto';
import FindedLanguagesDto from './dto/finded-languages.dto';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';

@ApiTags('languages')
@Controller('v2/languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @ApiResponse({ status: 201, type: CreatedLanguageDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post('one')
  create(@Res() res, @Body() dto: CreateLanguageDto) {
    const clear_dto = plainToInstance(CreateLanguageDto, dto, {
      strategy: 'excludeAll',
    });
    return this.languagesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedLanguagesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.languagesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedLanguageDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.languagesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateLanguageDto) {
    const clear_dto = plainToInstance(UpdateLanguageDto, dto, {
      strategy: 'excludeAll',
    });
    return this.languagesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.languagesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.languagesService.remove(res, id);
  }
}
