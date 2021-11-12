export function sumInRange(start, end) {
  let result = 0;
  for (let num = start; num <= end; num += 1) {
    result += num;
  }
  console.log(result);
}

export function printMultiplicationTableFor(num) {
  for (let i = 1; i < 10; i += 1) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

export function calcAverageOfOddNumbersInRange() {
  const num = prompt("Введите число: ");
  let sum = 0;

  for (let i = 1; i <= num; i += 1) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  console.log(`Сумма нечетных чисел от 1 до ${num}: ${sum}.`);
}
