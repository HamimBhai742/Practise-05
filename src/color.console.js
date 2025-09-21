import chalk from 'chalk';

export const logInfo = (message) => {
  console.log(chalk.blue(message));
};

export const logWarning = (message) => {
  console.log(chalk.yellow(message));
};

export const logError = (message) => {
  console.log(chalk.red(message));
};
