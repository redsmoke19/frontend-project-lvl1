import { getRandomNumber } from '../common.js';
import runGame from '../game-engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameTask = () => {
  const number = getRandomNumber(2, 100);
  const question = String(number);
  const answer = getPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, getGameTask);
};

export default startEvenGame;
