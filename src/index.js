/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
  let newString = '';
  for (let stringElement of string) {
    if(stringElement.toLowerCase() === 'v' || stringElement.toLowerCase() === 'z'){
      newString += '*';
    } else {
      newString += stringElement;
    };
  };
  return newString;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
  if(string.includes(word)){
    return(`${string.slice(0, string.indexOf(word))}${newWord}${string.slice(string.indexOf(word) + word.length)}`);
  } else {
    return string;
  };
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
  return string.slice(0, length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
let countSymbol = 0;
export const quantityOfSymbols = (string, symbol) => {
  for (let i = 0; i < string.length; i++) {
    if(string[i].toLowerCase() === symbol) {
      countSymbol++;
    }
  }
  return countSymbol;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
let countSymbol = 0;
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
  let elementNumber = 0;
  while (true) {
    if(string.toLowerCase().indexOf(symbol, elementNumber) === -1) {
      break;
    } else if(string.toLowerCase().indexOf(symbol, elementNumber) >= 0) {
      countSymbol += 1;
      elementNumber = string.toLowerCase().indexOf(symbol, elementNumber) + 1;
      continue;
    } else {
      countSymbol += 0;
    };
  };
  return countSymbol;
};
