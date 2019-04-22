import express from 'express';
import * as api from './express/api';

const rootHandler: express.RequestHandler = (_, res): void => {
  res.send('Hello yo!');
};

const rootMock: api.RootRouteHandler = { rootHandler };

api.server(rootMock).listen(3000, (): void => console.log('App running on 3000!'));
