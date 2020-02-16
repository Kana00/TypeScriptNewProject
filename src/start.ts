import Logger from './utils/Logger';

// -------------------------------------------------------------------- configuration
process.on('SIGINT', onExit);

async function onExit() {
  process.stdout.write('\n');
  Logger.warn(`---------- Node STOP ----------`);
  process.removeAllListeners();
  process.exit();
}

process.on('uncaughtException', function (error) {
  Logger.warn('An uncaught error occurred!');
  Logger.error(error);
});

Logger.info(`---------- Node START ----------`);
// -------------------------------------------------------------------- EVENTS
// -------------------------------------------------------------------- START
