import { AbstractLogService } from '../shared/logs/AbstractLogService';
import { LogService } from '../shared/logs/LogService';
import { WinstonAdapter } from '../shared/logs/WinstonAdapter';
import { AbstractServiceProvider } from './AbstractServiceProvider';

export class ServiceProvider implements AbstractServiceProvider {
  constructor(private winstonAdapter: WinstonAdapter) {}

  public getLogService(): AbstractLogService {
    return LogService.getInstance(this.winstonAdapter);
  }
}
