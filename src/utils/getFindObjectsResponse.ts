import BaseApiResponseDto from 'src/dto/BaseApiResponse.dto';
import BasePaginationApiResponseDto from 'src/dto/BasePaginationApiReponse.dto';
import getStatusByCode from 'src/packages/getStatusByCode/getStatusByCode';

interface PaginationDto {
  current_page: number;
  last_page: number;
  skip_items: number;
  take_items: number;
  total_items: number;
}

export default function getFindObjectsResponse(
  statusCode: number,
  entity: any,
  pagination: PaginationDto,
) {
  const response: BasePaginationApiResponseDto = {
    statusCode,
    status: getStatusByCode(statusCode),
    message: 'I get array objects',
    pagination,
    data: entity,
  };
  return response;
}
