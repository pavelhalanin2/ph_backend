import redoc from 'redoc-express';
import { INestApplication } from '@nestjs/common';

export function setupRedoc(app: INestApplication<any>, GLOBAL_PREFIX: string) {
  const redocOptions = {
    title: 'Your API Title',
    version: '1.0',
    specUrl: `${GLOBAL_PREFIX}/swagger.json`,
  };

  app.use(`${GLOBAL_PREFIX}/redoc`, redoc(redocOptions));
}
