import express from 'express';
import { createServer as createHttpServer } from 'http';

export function plug() {
  const app = express();

  const httpServer = createHttpServer(app);

  app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  return {
    app,
    httpServer,
  };
}
