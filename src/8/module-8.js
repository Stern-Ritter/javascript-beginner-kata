export function showDayOfWeek() {
  const answer = prompt("Введите дату (ДД.ММ.ГГГГ):");
  const parts = answer.split(".");
  const date = new Date(parts[2], parts[1] - 1, parts[0]);

  let day;
  switch (date.getDay()) {
    case 1:
      day = "Понедельник";
      break;
    case 2:
      day = "Вторник";
      break;
    case 3:
      day = "Среда";
      break;
    case 4:
      day = "Четверг";
      break;
    case 5:
      day = "Пятница";
      break;
    case 6:
      day = "Суббота";
      break;
    case 0:
      day = "Воскресенье";
      break;
    default:
      day = "Некорректное значение";
  }
  console.log(day);
}

export function countMinutes() {
  const now = new Date();
  const dayStart = new Date(now.getTime());
  dayStart.setHours(0, 0);
  console.log(`Прошло ${(now - dayStart) / (1000 * 60)} минут.`);
}

export function findYoungerUser(first, second) {
  const partsFirst = first.split(".");
  const partsSecond = second.split(".");
  const dateFirst = new Date(
    partsFirst[2],
    partsFirst[1] - 1,
    partsFirst[0]
  ).getTime();
  const dateSecond = new Date(
    partsSecond[2],
    partsSecond[1] - 1,
    partsSecond[0]
  ).getTime();
  if (dateFirst > dateSecond) {
    console.log("Первый моложе второго.");
  } else if (dateSecond > dateFirst) {
    console.log("Второй моложе первого.");
  } else {
    console.log("Первый и второй одного возраста.");
  }
}
