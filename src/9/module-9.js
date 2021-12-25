export function isTriangleRectangular(a, b, c) {
  if (a >= b && a >= c) {
    return a ** 2 === b ** 2 + c ** 2;
  }
  if (b >= a && b >= c) {
    return b ** 2 === a ** 2 + c ** 2;
  }
  return c ** 2 === a ** 2 + b ** 2;
}

export function getCircumferenceAndArea(radius) {
  const сircumference = 2 * Math.PI * radius;
  const area = Math.PI * radius ** 2;
  console.log(`Периметр окружности: ${Math.round(сircumference)},\
 площадь окружности: ${Math.round(area)}`);
}

export function findEquationRoots(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    console.log(`Один корень: ${-((b / 2) * a)}.`);
  } else if (d > 0) {
    const dSqrt = Math.sqrt(d);
    const firstRoot = ((-b + dSqrt) / 2) * a;
    const secondRoot = ((-b - dSqrt) / 2) * a;
    console.log(`Два корня: ${firstRoot},  ${secondRoot}.`);
  } else {
    console.log("Корней нет.");
  }
}
