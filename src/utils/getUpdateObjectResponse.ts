import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import getStatusByCode from 'src/packages/getStatusByCode/getStatusByCode';

export default function getUpdateObjectResponse(
  statusCode: number,
  entity: any,
) {
  const response: BaseApiResponseDto = {
    statusCode,
    status: getStatusByCode(statusCode),
    message: 'I updated object',
    data: entity,
  };
  return response;
}
