export type ReadyPayload = {
  clientsConnected: number;
  clientsSearching: number;

  channels: PublicChannelInfo[];
};
