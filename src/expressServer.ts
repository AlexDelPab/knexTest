import { diContainer } from './inversify.config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import config from '../config.json';
import { InversifyExpressServer } from 'inversify-express-utils';
import "./controllers/companyController";


class ExpressServer {
  _server: InversifyExpressServer;

  constructor() {
    this._server = new InversifyExpressServer(diContainer, null, { rootPath: "/api/v1"});
  }

  init(): express.Application {
    this._server.setConfig((app) => {
      this.initMiddlewares(app);
    })

    return this._server.build();
  }

  /**
   * @param app 
   */
  private initMiddlewares(app: express.Application) {
    app.set('json spaces', 4);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Handle logs in console during development
    if (process.env.NODE_ENV === 'development' || config.NODE_ENV === 'development') {
      app.use(morgan('dev'));
      app.use(cors());
    }

    // Handle security and origin in production
    if (process.env.NODE_ENV === 'production' || config.NODE_ENV === 'production') {
      app.use(helmet());
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      return res.status(500).json({
        errorName: err.name,
        message: err.message,
        stack: err.stack || 'no stack defined'
      });
    });
  }



}

const server = new ExpressServer();
export default server.init();