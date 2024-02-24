import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import getStatusByCode from 'src/packages/getStatusByCode/getStatusByCode';

export default function getFindObjectResponse(statusCode: number, entity: any) {
  const response: BaseApiResponseDto = {
    statusCode,
    status: getStatusByCode(statusCode),
    message: 'I get object',
    data: entity,
  };
  return response;
}
