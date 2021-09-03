import { getRandomNumber } from '../common.js';
import runGame from '../game-engine.js';

const description = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('указанный оператор не поддерживается');
  }
};

const getGameTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${number1} ${sign} ${number2}`;
  const answer = String(calculate(number1, number2, sign));
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, getGameTask);
};

export default startEvenGame;
