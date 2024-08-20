"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_1.AppModule, { cors: true });
    const config = app.get(config_1.ConfigService);
    app.enableVersioning();
    app.setGlobalPrefix('api');
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(config.get('PORT'), () => {
        console.log(`Server:http://localhost:${config.get('PORT')}`);
        console.log(`Docs:http://localhost:${config.get('PORT')}/api/docs`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map