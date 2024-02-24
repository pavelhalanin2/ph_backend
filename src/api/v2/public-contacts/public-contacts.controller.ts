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

import { PublicContactsService } from './public-contacts.service';
import CreatePublicContactDto from './dto/create-public-contact.dto';
import UpdatePublicContactDto from './dto/update-public-contact.dto';
import FindedPublicContactDto from './dto/finded-public-contact.dto';
import CreatedPublicContactDto from './dto/created-public-contact.dto';
import FindedPublicContactsDto from './dto/finded-public-contacts.dto';

@ApiTags('public-contacts')
@Controller('v2/public-contacts')
export class PublicContactsController {
  constructor(private readonly publicContactsService: PublicContactsService) {}

  @ApiResponse({ status: 201, type: CreatedPublicContactDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreatePublicContactDto) {
    const clear_dto = plainToInstance(CreatePublicContactDto, dto, {
      strategy: 'excludeAll',
    });
    return this.publicContactsService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedPublicContactsDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.publicContactsService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedPublicContactDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.publicContactsService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(
    @Res() res,
    @Param('id') id: string,
    @Body() dto: UpdatePublicContactDto,
  ) {
    const clear_dto = plainToInstance(UpdatePublicContactDto, dto, {
      strategy: 'excludeAll',
    });
    return this.publicContactsService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.publicContactsService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.publicContactsService.remove(res, id);
  }
}
