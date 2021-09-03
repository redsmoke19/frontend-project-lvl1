import { getRandomNumber } from '../common.js';
import runGame from '../game-engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, getGameTask);
};

export default startEvenGame;
