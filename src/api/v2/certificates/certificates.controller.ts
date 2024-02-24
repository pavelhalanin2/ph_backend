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
import { CertificatesService } from './certificates.service';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';
import CreateCertificateDto from './dto/create-certificate.dto';
import UpdateCertificateDto from './dto/update-certificate.dto';
import FindedCertificateDto from './dto/finded-certificate.dto';
import CreatedCertificateDto from './dto/created-certificate.dto';
import FindedCertificatesDto from './dto/finded-certificates.dto';

@ApiTags('certificates')
@Controller('v2/certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @ApiResponse({ status: 201, type: CreatedCertificateDto })
  @ApiResponse({ status: 409, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Post()
  create(@Res() res, @Body() dto: CreateCertificateDto) {
    const clear_dto = plainToInstance(CreateCertificateDto, dto, {
      strategy: 'excludeAll',
    });
    return this.certificatesService.create(res, clear_dto);
  }

  @ApiResponse({ status: 200, type: FindedCertificatesDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get()
  findAll(@Res() res, @Query() query: QueryPaginationDto) {
    return this.certificatesService.findAll(res, query);
  }

  @ApiResponse({ status: 200, type: FindedCertificateDto })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.certificatesService.findOne(res, id);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Put(':id')
  update(@Res() res, @Param('id') id: string, @Body() dto: UpdateCertificateDto) {
    const clear_dto = plainToInstance(UpdateCertificateDto, dto, {
      strategy: 'excludeAll',
    });
    return this.certificatesService.update(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Patch(':id/show')
  updateShow(@Res() res, @Param('id') id: string, @Body() dto: ShowDto) {
    const clear_dto = plainToInstance(ShowDto, dto, {
      strategy: 'excludeAll',
    });
    return this.certificatesService.updateShow(res, id, clear_dto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: BaseApiResponseDto })
  @ApiResponse({ status: 500, type: BaseApiResponseDto })
  @Delete(':id')
  remove(@Res() res, @Param('id') id: string) {
    return this.certificatesService.remove(res, id);
  }
}
