/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import logger from '../../logger';
import { Log } from './Log';

export class WinstonAdapter {
  public warn(log: Log) {
    logger.warn(log.message, this.getMeta(log));
  }

  public info(log: Log) {
    logger.info(log.message, this.getMeta(log));
  }

  public error(log: Log) {
    logger.error(log.message, this.getMeta(log));
  }

  public debug(log: Log) {
    logger.debug(log.message, this.getMeta(log));
  }

  private getMeta(log: Log) {
    return {
      ...log.meta,
    };
  }
}
