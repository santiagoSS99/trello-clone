import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common/services';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

const APP_PORT = process.env.APP_PORT || 3000

async function app() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT, ()=> console.log(`Listening on PORT:${APP_PORT}`));
}
app();


// @WebSocketGateway(80, {
//   cors: {origin: '*'}
// })
// export class UserConected 
// implements  OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect{
//   @WebSocketServer() server: Server;

//   afterInit(server: any) {
//     console.log('Esto se ejecuta cuando inicia')
//   }

//   handleConnection(client: any, ...args: any[]) {
//     console.log('Hola alguien se conecto al socket 👌👌👌');
//   }

//   handleDisconnect(client: any) {
//     console.log('ALguien se fue! chao chao')
// }
// }