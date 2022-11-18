import { config as dotenvConfig } from 'dotenv';
import { connectAPI } from './api';

dotenvConfig();

async function main() {
  const PORT = Number(process.env.PORT) || 80;

  const { app, httpServer, io } = await connectAPI(PORT);

  console.log(`App initialized`);

  console.log(`Opening...`);
  await open('http://localhost');
}

main();
