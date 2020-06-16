import express from 'express';

import { CustomContext } from './types/CustomContext';
import { setBodyParser } from './utils';

const makeApp = (customContext: CustomContext) => {
  const app = express();
  setBodyParser(app);

  return app;
};

export default makeApp;
