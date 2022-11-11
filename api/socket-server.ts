import type { Server as HttpServer } from 'http';
import type { ServerOptions as SocketIoServerOptions } from 'socket.io';
import { Server as SocketIoServer } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  SocketData,
} from './socket-server.types';

export function plug(
  server: HttpServer,
  opts?: Partial<SocketIoServerOptions>,
) {
  const io = new SocketIoServer<
    ClientToServerEvents,
    ServerToClientEvents,
    DefaultEventsMap,
    SocketData
  >(server, {
    serveClient: false,

    ...opts,
  });

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('searchForClient', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}
