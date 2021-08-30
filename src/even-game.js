import { getRandomNumber } from './common.js';
import runGame from './game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameTask = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, getGameTask);
};

export default startEvenGame;

// import readlineSync from 'readline-sync';
// import { getRandomNumber, printText } from './common.js';
//
// export default () => {
//   const name = readlineSync.question('May I have your name?: ');
//   printText(`'Hello, ${name}!`);
//   printText('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 1; i <= 3; i += 1) {
//     const number = getRandomNumber();
//     printText(`Question: ${number}`);
//     const youAnswer = readlineSync.question('You answer: ');
//     if (number % 2 === 0) {
//       if (youAnswer === 'yes') {
//         printText('Correct!');
//       } else {
//         printText(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
//         return printText(`Let's try again, ${name}!`);
//       }
//     }
//     if (number % 2 !== 0) {
//       if (youAnswer === 'no') {
//         printText('Correct!');
//       } else {
//         console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
//         return printText(`Let's try again, ${name}!`);
//       }
//     }
//   }
//   return printText(`Congratulations, ${name}!`);
// };
