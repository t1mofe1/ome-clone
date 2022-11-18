import { Server as SocketIoServer, Socket } from 'socket.io';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { ReadyPayload } from './types/payloads/ready.payload';

export type PublicSocketInfo = {
  name?: string;
  country?: string;
  avatar?: string;
  sex?: string;
};

export type ClientSearchOpts = {
  country?: string;
  sex?: string;
};

export interface ServerToClientEvents {
  clientConnect: (data: { client: PublicSocketInfo }) => void;
  clientDisconnect: (data: { client: PublicSocketInfo }) => void;
}

export interface ClientToServerEvents {
  searchForClient: (data: ClientSearchOpts) => void;

  auth: (data: { token: string }) => void;

  ready: (callback: (payload: ReadyPayload) => any) => void;
}

export type SocketData = PublicSocketInfo & {
  // ip: string;
  // etc
};

export const SocketServer = SocketIoServer<
  ClientToServerEvents,
  ServerToClientEvents,
  DefaultEventsMap,
  SocketData
>;
export type SocketClient = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  DefaultEventsMap,
  SocketData
>;
