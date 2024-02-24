import { HttpStatus, Injectable } from '@nestjs/common';
import BaseApiResponseDto from './dto/BaseApiResponse.dto';
import getStatusByCode from './packages/getStatusByCode/getStatusByCode';

@Injectable()
export class AppService {
  getHello() {
    const statusCode = HttpStatus.OK;
    const result: BaseApiResponseDto = {
      statusCode,
      status: getStatusByCode(statusCode),
      message: 'Hello, World!',
      data: {
        swagger: '/swagger',
        swaggerJSON: '/swagger.json',
        redoc: '/redoc',
      },
    };
    return result;
  }

  swagger() {
    const statusCode = HttpStatus.OK;
    const result: BaseApiResponseDto = {
      statusCode,
      status: getStatusByCode(statusCode),
      message: 'Hello, World!',
      data: {
        swagger: '/api/swagger',
        redoc: '/api/redoc',
      },
    };
    return result;
  }
}
