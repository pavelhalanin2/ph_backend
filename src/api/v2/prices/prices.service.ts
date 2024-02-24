import { Response } from 'express';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ShowDto from 'src/dto/Show.dto';
import CreatePriceDto from './dto/create-price.dto';
import UpdatePriceDto from './dto/update-price.dto';
import QueryPaginationDto from 'src/dto/QueryPagination.dto';
import getFindObjectResponse from 'src/utils/getFindObjectResponse';
import PH_DOC_Prices from 'src/typeorm/entities/PH_DOC_Prices.entity';
import getFindObjectsResponse from 'src/utils/getFindObjectsResponse';
import getCreateObjectResponse from 'src/utils/getCreateObjectResponse';
import getUpdateObjectResponse from 'src/utils/getUpdateObjectResponse';
import getRemoveObjectResponse from 'src/utils/getRemoveObjectResponse';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(PH_DOC_Prices)
    private readonly prices_rep: Repository<PH_DOC_Prices>,
  ) {}

  async create(res: Response, dto: CreatePriceDto) {
    const object = await this.prices_rep.save(dto);
    const statusCode = 201;
    const json = getCreateObjectResponse(statusCode, object);
    return res.status(statusCode).json(json);
  }

  async findAll(res: Response, query: QueryPaginationDto) {
    const current_page = +query.page || 1;
    const take_items = +query.take || 20;
    const skip_items = (current_page - 1) * take_items;

    const [array_objects, total_items] = await this.prices_rep.findAndCount({
      skip: skip_items,
      take: take_items,
    });

    const last_page = Math.ceil(total_items / take_items);

    const statusCode = 200;
    const json = getFindObjectsResponse(statusCode, array_objects, {
      current_page,
      last_page,
      skip_items,
      take_items,
      total_items,
    });
    res.status(statusCode).json(json);
  }

  async findOne(res: Response, id: string) {
    const object = await this.prices_rep.findOneOrFail({
      where: { ph_ref: id },
    });
    const statusCode = 200;
    const json = getFindObjectResponse(statusCode, object);
    return res.status(statusCode).json(json);
  }

  async update(res: Response, id: string, dto: UpdatePriceDto) {
    const object = await this.prices_rep.findOneOrFail({
      where: { ph_ref: id },
    });
    const info = await this.prices_rep.update(id, dto);
    const statusCode = 200;
    const json = getUpdateObjectResponse(statusCode, { object, info });
    return res.status(statusCode).json(json);
  }

  async updateShow(res: Response, id: string, dto: ShowDto) {
    const object = await this.prices_rep.findOneOrFail({
      where: { ph_ref: id },
    });
    const info = await this.prices_rep.update(id, dto);
    const statusCode = 200;
    const json = getUpdateObjectResponse(statusCode, { object, info });
    return res.status(statusCode).json(json);
  }

  async remove(res: Response, id: string) {
    const object = await this.prices_rep.findOneOrFail({
      where: { ph_ref: id },
    });
    const info = await this.prices_rep.delete({ ph_ref: id });
    const statusCode = 200;
    const json = getRemoveObjectResponse(statusCode, { object, info });
    return res.status(statusCode).json(json);
  }
}
