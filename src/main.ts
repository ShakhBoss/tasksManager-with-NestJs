import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = app.get<ConfigService>(ConfigService);

  // app.use(
  //   basicAuth({
  //     challenge: true,
  //     users: { admin: '1234' },
  //   }),
  // );

  app.enableVersioning();
  app.setGlobalPrefix('api');
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(config.get('PORT'), () => {
    console.log(`Server:http://localhost:${config.get('PORT')}`);
    console.log(`Docs:http://localhost:${config.get('PORT')}/api/docs`);
  });
}
bootstrap();
