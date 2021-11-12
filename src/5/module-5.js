export function sumArrElements(array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

export function doubleArrElements(array) {
  return array.map((element) => element * 2);
}

export function findMinAndMaxArrElements(array) {
  let min = array[0];
  let max = array[0];

  array.forEach((element) => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  });
  console.log(`Минимум: ${min}, максимум: ${max}.`);
}
