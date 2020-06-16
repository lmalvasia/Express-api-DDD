import { ServiceProvider } from './dependency-injection/ServiceProvider';
import makeApp from './express/app';
import { CustomContext } from './express/types/CustomContext';
import { InfoLogData } from './shared/logs/AbstractLogService';
import { WinstonAdapter } from './shared/logs/WinstonAdapter';

const PORT_NUMBER = 3000;

const defaultLogginMeta = {
  topic: 'server-main',
};

// Dependcy Injection
const winstonAdapter = new WinstonAdapter();
const serviceProvider = new ServiceProvider(winstonAdapter);
const logService = serviceProvider.getLogService();

const expressContext: CustomContext = {
  services: serviceProvider,
};

const app = makeApp(expressContext);

const startServer = () => {
  app.listen({ port: PORT_NUMBER }, () => {
    const log: InfoLogData = {
      message: `🚀 Server ready at http://localhost:${PORT_NUMBER}`,
      meta: {
        ...defaultLogginMeta,
      },
    };
    logService.onInfo(log);
  });
};

startServer();
