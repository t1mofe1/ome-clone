import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import { createServer as createHttpServer } from 'http';
import morgan from 'morgan';

export function plug() {
  const app = express();

  app.set('json spaces', 2);

  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(compression());
  app.use(morgan('combined'));

  const httpServer = createHttpServer(app);

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  return {
    app,
    httpServer,
  };
}
