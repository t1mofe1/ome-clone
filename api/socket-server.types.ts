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
}

export type SocketData = PublicSocketInfo & {
  // ip: string;
  // etc
};
