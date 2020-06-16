import makeApp from './express/app';

const PORT_NUMBER = 3000;

const app = makeApp({});

const startServer = () => {
  app.listen({ port: PORT_NUMBER }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:${PORT_NUMBER}`);
  });
};

startServer();
