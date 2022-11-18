import { Schema, connect, Model } from 'mongoose';

type ConnectorOptions = {
  model: Model<any>;
  schema: Schema;
};

async function connector(options: ConnectorOptions, uri: string) {
  await connect(uri);
}
