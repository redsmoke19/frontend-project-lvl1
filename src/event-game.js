import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (youAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return (
          console.log(`Let's try again, ${name}!`)
        );
      }
    }
    if (number % 2 !== 0) {
      if (youAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        return (
          console.log(`Let's try again, ${name}!`)
        );
      }
    }
    // if (number % 2 === 0 && youAnswer === 'yes') {
    //   console.log('Correct!');
    // } else {
    //   console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    //   return `Let's try again, ${name}!`;
    // }
    // if (number % 2 !== 0 && youAnswer === 'no') {
    //   console.log('Correct!');
    // } else {
    //   console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    //   return `Let's try again, ${name}!`;
    // }
  }
  return (
    console.log(`Congratulations, ${name}!`)
  );
};
