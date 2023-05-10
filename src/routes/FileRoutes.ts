import express, { Request, Response } from 'express';

export class FileRoutes {
  public routes = (express: express.Application): void => {
    express.post('/', async (req: Request, res: Response) => {
      try {
        res.status(200).json({ message: 'Hello World' });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        res.status(500).json(error.message);
      }
    });
  };
}
