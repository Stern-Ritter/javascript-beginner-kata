export function findMaxOfNumbers(first, second) {
  console.log(`Наибольшее число: ${first >= second ? first : second}.`);
}

export function showMonthForNumber() {
  const answer = prompt("Введите номер месяца:");
  switch (answer) {
    case 1:
      console.log("Январь");
      break;
    case 2:
      console.log("Февраль");
      break;
    case 3:
      console.log("Март");
      break;
    case 4:
      console.log("Апрель");
      break;
    case 5:
      console.log("Май");
      break;
    case 6:
      console.log("Июнь");
      break;
    case 7:
      console.log("Июль");
      break;
    case 8:
      console.log("Август");
      break;
    case 9:
      console.log("Сентябрь");
      break;
    case 10:
      console.log("Октябрь");
      break;
    case 11:
      console.log("Ноябрь");
      break;
    case 12:
      console.log("Декабрь");
      break;
    default:
      console.log("Некорректный номер месяца.");
  }
}

export function canCircleFitIntoSquare(circle, square) {
  return Math.sqrt(circle / Math.PI) <= Math.sqrt(square) / 2;
}
