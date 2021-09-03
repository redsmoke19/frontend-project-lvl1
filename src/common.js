const printText = (str) => console.log(str);
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getSign = (arr) => arr[Math.floor(Math.random() * arr.length)];

export {
  printText, getRandomNumber, getSign,
};
