import { getRandomNumber } from '../common.js';
import runGame from '../game-engine.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, step, length) => {
  const progression = [startNumber];
  for (let i = 1; i < length; i += 1) {
    const nextNumber = progression[i - 1] + step;
    progression.push(nextNumber);
  }
  return progression;
};
// const progression = getProgression(2, 3, 10);
// const deleted = progression.splice(0, 1, '..');
// console.log(deleted[0]);

// const getRecursionProgression = (startNumber, step, length) => {
//   const result = [];
//   if (length === 0) {
//     return result;
//   }
//   return [startNumber, ...getRecursionProgression(startNumber + step, step, length - 1)];
// };

const getGameTask = () => {
  const startNumber = getRandomNumber(1, 7);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const deletedIndex = getRandomNumber(0, length);
  const progression = getProgression(startNumber, step, length);
  const deleted = progression.splice(deletedIndex, 1, '..');
  const question = progression.join(', ');
  const answer = String(deleted[0]);
  return [question, answer];
};

const startEvenGame = () => {
  runGame(description, getGameTask);
};

export default startEvenGame;
