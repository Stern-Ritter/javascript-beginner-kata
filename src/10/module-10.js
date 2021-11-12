export function isStringDate(str) {
  const pattern =
    /^(0?[1-9]|[12][0-9]|3[01])([/.-])(0?[1-9]|1[012])\2((19|20)\d\d)$/;
  return Boolean(str.match(pattern));
}

export function isStringEmail(str) {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,4}$/;
  return Boolean(str.match(pattern));
}

export function isStringPhoneNumber(str) {
  const pattern =
    /^[+]?[0-9]{1,3}[(]?[0-9]{2,4}[)]?[0-9]{3}[.-\s]?[0-9]{2}[.-\s]?[0-9]{2}$/;
  return Boolean(str.match(pattern));
}
