export interface LogData {
  message: string;
  meta?: any;
}

export interface ErrorLogData extends LogData {
  errors?: Error[] | any;
}

export type InfoLogData = LogData;

export type WarningLogData = LogData;

export type DebugLogData = LogData;

export interface AbstractLogService {
  onWarn(log: WarningLogData): void;
  onInfo(log: InfoLogData): void;
  onError(data: ErrorLogData): void;
  onDebug(data: DebugLogData): void;
}
