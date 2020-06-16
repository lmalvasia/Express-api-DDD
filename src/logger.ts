import winston from 'winston';

const logger = winston.createLogger();

const superSimple = winston.format(info => {
  const { level, message } = info;
  return { level, message };
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      superSimple(),
      winston.format.simple(),
    ),
  }),
);

export default logger;
