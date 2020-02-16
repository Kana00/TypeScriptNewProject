import chalk from 'chalk';
import moment from 'moment';
import * as fs from 'fs';
import LogMessageDAO from '../dao/LogMessageDAO';

export default class Logger {

  static writeText(text: string) {
    fs.appendFileSync(`./logs/log.txt`, text);
  }

  static info(message: string) {
    LogMessageDAO.saveToDB({ message });

    const date = `[Info ${moment().format('DD/MM/YYYY HH:mm:ss')}]`;
    const dateColored = `[${chalk.blue('Info')} ${chalk.yellow(moment().format('DD/MM/YYYY HH:mm:ss'))}]`;
    console.log(`${dateColored} ${chalk.white(message)}`);
    Logger.writeText(`${date} ${message}` + '\n');
  }

  static warn(message: string) {
    LogMessageDAO.saveToDB({ message });

    const date = `[Info ${moment().format('DD/MM/YYYY HH:mm:ss')}]`;
    const dateColored = `[${chalk.blue('Info')} ${chalk.yellow(moment().format('DD/MM/YYYY HH:mm:ss'))}]`;
    console.log(`${dateColored} ${chalk.yellow(message)}`);
    Logger.writeText(`${date} ${message}` + '\n');
  }

  static error(message: string | Error) {
    LogMessageDAO.saveToDB({ message });

    const date = `[Time ${moment().format('DD/MM/YYYY HH:mm:ss')}]`;
    const dateColored = `[${chalk.blue('Time')} ${chalk.yellow(moment().format('DD/MM/YYYY HH:mm:ss'))}]`;
    console.log(`${dateColored}`);
    console.log(message);
    Logger.writeText(`${date} ${message}` + '\n');
  }
}
