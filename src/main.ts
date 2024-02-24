import APP_ENV from './consts/APP_ENV';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { setupRedoc } from './middleware/redoc.middleware';
import setupGlobalPipe from './middleware/pipe.middleware';
import { setupSwagger } from './middleware/swagger.middleware';
import setupGlobalFilter from './middleware/filter.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '20mb' }));

  app.enableCors();

  const GLOBAL_PREFIX = APP_ENV.GLOBAL_PREFIX;
  app.setGlobalPrefix(GLOBAL_PREFIX);

  setupRedoc(app, GLOBAL_PREFIX);
  setupSwagger(app, GLOBAL_PREFIX);

  setupGlobalFilter(app);
  setupGlobalPipe(app);

  const PORT = Number(APP_ENV.PORT);
  await app.listen(PORT, function () {
    console.log(`
  > http://localhost:${PORT}${GLOBAL_PREFIX}         - Hello, World!
  > http://localhost:${PORT}${GLOBAL_PREFIX}/swagger - SwaggerUI
  > http://localhost:${PORT}${GLOBAL_PREFIX}/redoc   - redoc
`);
  });
}
bootstrap();
