export function diff(first, second) {
  if (first >= second) {
    return first - second;
  }
  return second - first;
}

export function isWord(text) {
  return text.split(" ").length === 1;
}

export function pow(a, x) {
  let result = 1;
  if (x > 0) {
    for (let i = 1; i <= x; i += 1) {
      result *= a;
    }
  } else {
    for (let i = -1; i >= x; i -= 1) {
      result /= a;
    }
  }
  return result;
}
