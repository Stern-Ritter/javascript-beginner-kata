export function sumAndMultiplicationOfTwoNumbers(first, second) {
  console.log(`Сумма: ${first + second}, произведение: ${first * second}.`);
}

export function countNumberOfCharInStrings(first, second) {
  console.log(`Количество символов: ${first.length + second.length}.`);
}

export function sumDigitsOfNumber(number) {
  let remainder = number;
  let sum = 0;
  while (remainder > 9) {
    sum += remainder % 10;
    remainder = Math.floor(remainder / 10);
  }
  sum += remainder;
  console.log(`Сумма цифр числа: ${sum}.`);
}
