import { getRandomNumber } from '../common.js';
import runGame from '../game-engine.js';

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
