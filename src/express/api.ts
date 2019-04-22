import express from 'express';

export interface RootRouteHandler {
  rootHandler: express.RequestHandler;
}

export function server(rootController: RootRouteHandler): express.Express {
  const server = express();

  server.get('/', rootController.rootHandler);

  return server;
}
