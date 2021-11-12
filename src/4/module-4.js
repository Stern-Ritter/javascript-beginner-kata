export function setUserAge(user) {
  const editUser = user;
  const answer = prompt("Введите возраст: ");
  editUser.age = answer;
}

export function copyAndEditUser(user) {
  const cloneUser = { ...user };
  cloneUser.role = "admin";
  return cloneUser;
}
