import {
  AbstractLogService,
  DebugLogData,
  ErrorLogData,
  InfoLogData,
  LogData,
  WarningLogData,
} from './AbstractLogService';
import { Log } from './Log';
import { WinstonAdapter } from './WinstonAdapter';

export class LogService implements AbstractLogService {
  constructor(private winstonWrapper: WinstonAdapter) {}

  private static instance: AbstractLogService;

  public static getInstance(winston: WinstonAdapter): AbstractLogService {
    if (!LogService.instance) {
      LogService.instance = new LogService(winston);
    }

    return LogService.instance;
  }

  public onWarn(data: WarningLogData): void {
    const log: Log = {
      message: data.message,
      meta: this.getMeta(data),
    };
    this.winstonWrapper.warn(log);
  }

  public onInfo(data: LogData): void {
    const log: Log = {
      message: data.message,
      meta: this.getMeta(data),
    };
    this.winstonWrapper.info(log);
  }

  public onError(data: ErrorLogData): void {
    const errors = this.getErrorMeta(data);
    const log: Log = {
      message: data.message,
      meta: {
        ...errors,
        ...data.meta,
      },
    };
    this.winstonWrapper.error(log);
  }

  public onDebug(data: DebugLogData): void {
    const log: Log = {
      message: data.message,
      meta: this.getMeta(data),
    };
    this.winstonWrapper.debug(log);
  }

  private getErrorMeta(data: ErrorLogData) {
    if (!data.errors) return {};
    return {
      errors: data.errors,
    };
  }

  private getMeta(data: InfoLogData) {
    return data.meta ? data.meta : {};
  }
}
