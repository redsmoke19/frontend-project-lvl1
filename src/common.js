const printText = (str) => console.log(str);
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  printText, getRandomNumber,
};
