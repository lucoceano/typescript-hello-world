import express from 'express';
import request from 'supertest';
import * as api from '../api';

describe('express.api', (): void => {
  describe('Route /', (): void => {
    it('Returns from rootController', async (): Promise<void> => {
      const textResponse = 'Hello world from dependency injection';
      const rootHandler: express.RequestHandler = (_, res): void => {
        res.send(textResponse);
      };

      const rootMock: api.RootRouteHandler = { rootHandler };
      const server = api.server(rootMock);
      const response = await request(server).get('/');
      expect(response.text).toEqual(textResponse);
    });
  });
});
