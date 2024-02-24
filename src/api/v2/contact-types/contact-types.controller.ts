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
import { ContactTypesService } from './contact-types.service';
import CreateContactTypeDto from './dto/create-contact-type.dto';
import UpdateContactTypeDto from './dto/update-contact-type.dto';
import FindedContactTypeDto from './dto/finded-contact-type.dto';
import CreatedContactTypeDto from './dto/created-contact-type.dto';
import FindedContactTypesDto from './dto/finded-contact-types.dto';

@ApiTags('contact-types')
@Controller('v2/contact-types')
export class ContactTypesController {
  constructor(private readonly contactTypesService: ContactTypesService) {}

  @ApiResponse({ status: 201, type: CreatedContactTypeDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateContactTypeDto) {
    const clear_dto = plainToInstance(CreateContactTypeDto, dto, {
      strategy: 'excludeAll',
    });
    return this.contactTypesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedContactTypesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.contactTypesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedContactTypeDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.contactTypesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(
    @Res() res,
    @Param('id') id: string,
    @Body() dto: UpdateContactTypeDto,
  ) {
    const clear_dto = plainToInstance(UpdateContactTypeDto, dto, {
      strategy: 'excludeAll',
    });
    return this.contactTypesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.contactTypesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.contactTypesService.remove(res, id);
  }
}
