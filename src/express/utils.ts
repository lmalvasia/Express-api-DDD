import bodyParser from 'body-parser';
import { Express } from 'express';

export const setBodyParser = (app: Express) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
