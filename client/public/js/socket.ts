import { io } from 'socket.io-client';
import type { ClientSearchOpts } from '../../../api/socket-server.types';

const socket = io({
  port: process.env.PORT,
});

export function findClient(opts: ClientSearchOpts) {
  socket.emit('searchForClient', opts);
}
