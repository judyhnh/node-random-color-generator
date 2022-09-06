import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let color = randomColor();

const box = `
###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`;

if (argv[2] && argv[3] === 'light') {
  color = randomColor({
    hue: argv[2],
    luminosity: 'light',
  });
  console.log(chalk.hex(`${color}`)(`${box}`));
} else if (argv[2] && argv[3] === 'dark') {
  color = randomColor({
    hue: argv[2],
    luminosity: 'dark',
  });
  console.log(chalk.hex(`${color}`)(`${box}`));
} else if (argv[2]) {
  color = randomColor({
    hue: argv[2],
  });
  console.log(chalk.hex(`${color}`)(`${box}`));
} else {
  console.log(chalk.hex(`${color}`)(`${box}`));
}
