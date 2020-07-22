const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let enterPassword = prompt("введите пароль администратора");
console.log(enterPassword);
if (enterPassword === null) {
  message = "Отменено пользователем";
} else if (enterPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
} else {
  message = "Пароль введен не верно";
}
alert(message);

