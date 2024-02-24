import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const SwaggerConfig = new DocumentBuilder()
  .setTitle('REST API документация')
  .setDescription('')
  .setVersion('1.0.0')
  .addTag('languages', 'Справочник "Языки"')
  .addTag('characteristics', 'Справочник "Характеристики"')
  .addTag('contact-types', 'Справочник "Виды контакта"')
  .addTag('currencies', 'Справочник "Валюта"')
  .addTag('items', 'Справочник "Номенклатура"')
  .addTag('public-contacts', 'Справочник "Контакты в общем доступе"')
  .addTag('seo-pages', 'Справочник "SEO страницы"')
  .addTag('catalogs', 'Документ "Каталоги"')
  .addTag('certificates', 'Документ "Сертификаты"')
  .addTag('prices', 'Документ "Прайс-листы"')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'access token - токен доступа',
      in: 'header',
    },
    'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'refresh token - токен обновления',
      in: 'header',
    },
    'refresh-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();

export function setupSwagger(
  app: INestApplication<any>,
  GLOBAL_PREFIX: string,
) {
  const document = SwaggerModule.createDocument(app, SwaggerConfig);

  app.use(`${GLOBAL_PREFIX}/swagger.json`, (req, res) => {
    res.json(document);
  });

  SwaggerModule.setup(`${GLOBAL_PREFIX}/swagger`, app, document);
}
