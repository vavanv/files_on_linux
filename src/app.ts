import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { FileRoutes } from './routes/FileRoutes';

import { getMorgan, getLogger } from './logging/index';

// import RedisClient from './redis/index';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();

    new FileRoutes().routes(this.express);
  }

  private middleware(): void {
    this.express.disable('x-powered-by');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.express.use(getMorgan(getLogger()));
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }
}

export default new App().express;
