let country = prompt(`Enter country`).toLowerCase();
let price;
let message;
if (country === null) 
{
console.log ("Отменено пользователем");
}
else { switch (country) {
case "китай":
price = 100; 
message = `Доставка в Китай будет стоить ${price} кредитов`;
break;
case "чили":
price = 250; 
message =`Доставка в Чили будет стоить ${price} кредитов`;
break;
case "австралия":
price = 170;    
message = `Доставка в Австралия будет стоить ${price} кредитов`;
break;
case "индия":
price = 80;
message = `Доставка в Индия будет стоить ${price} кредитов`;
break;
case "ямайка":
price = 120;
message = `Доставка в Ямайка будет стоить ${price} кредитов`;
break;
default:
message = `В вашей стране доставка не доступна`;
break;
}
}
alert (message);