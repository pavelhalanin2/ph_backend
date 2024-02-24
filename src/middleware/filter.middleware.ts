import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
  INestApplication,
} from '@nestjs/common';
import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';
import getStatusByCode from 'src/packages/getStatusByCode/getStatusByCode';

@Catch()
class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = '';
    console.log('Global filter:');
    console.log(exception);

    if (exception instanceof QueryFailedError) {
      statusCode = HttpStatus.CONFLICT;
      message = exception.message;
    } else if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception.getResponse()['message'] || exception.getResponse();
    } else if (exception instanceof EntityNotFoundError) {
      statusCode = HttpStatus.NOT_FOUND;
      message = exception.message;
    } else if (exception instanceof Error) {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.message;
    }

    const json: BaseApiResponseDto = {
      statusCode,
      status: getStatusByCode(statusCode),
      message,
      data: {},
    };

    response.status(statusCode).json(json);
  }
}

export default function setupGlobalFilter(app: INestApplication<any>) {
  app.useGlobalFilters(new HttpExceptionFilter());
}
