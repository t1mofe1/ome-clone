import { plug as plugHttpServer } from './http-server';
import { plug as plugSocketServer } from './socket-server';

export async function connectAPI(port: number) {
  const { app, httpServer } = plugHttpServer();

  const io = plugSocketServer(httpServer);

  return new Promise<{
    app: typeof app;
    httpServer: typeof httpServer;
    io: typeof io;
  }>((res, rej) => {
    httpServer.on('error', rej);

    httpServer.listen(80, () => res({ app, httpServer, io }));
  });
}
