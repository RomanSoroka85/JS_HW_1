const credits = 23580;
const pricePerDroid = 3000;
let totalDroid = prompt("количество дроидов которые вы хотите купить");
totalDroid = Number(totalDroid);
let totalPrice = pricePerDroid * totalDroid;
console.log(totalPrice);
let rest = credits - totalPrice;
console.log(rest);

let message;
if (totalDroid === 0) 
{
message = "Отменено пользователем";
} else if (totalPrice <= credits) 
{
message = `Вы купили "${totalDroid}" дроидов, на счету осталось "${rest}" кредитов.`;
} else
{
message = "Недостаточно средств на счету!";
}
alert(message);
console.log(message);