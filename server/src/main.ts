import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common/services';

const APP_PORT = process.env.APP_PORT || 3000

async function app() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT, ()=> console.log(`Listening on PORT:${APP_PORT}`));
}
app();
