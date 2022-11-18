import type { Server as HttpServer } from 'http';
import type { ServerOptions as SocketIoServerOptions } from 'socket.io';
import { SocketClient, SocketServer } from './socket-server.types';

export function plug(
  server: HttpServer,
  opts?: Partial<SocketIoServerOptions>,
) {
  const searchingClients = new Map<string, SocketClient>();

  const io = new SocketServer(server, {
    serveClient: false,

    ...opts,
  });

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('auth', (dataPayload) => {
      console.log('Auth', dataPayload);
    });

    socket.on('ready', (callback) => {
      console.log('Client ready');

      const readyPayload = {
        clientsConnected: io.sockets.sockets.size,
        clientsSearching: searchingClients.size,

        channels: [],
      };

      console.log('Sending ready payload', readyPayload);

      callback(readyPayload);
    });

    socket.on('searchForClient', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}
