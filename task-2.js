const total = 100;
let orderer = 50;
if (orderer <= total) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else {
  console.log(`На складе недостаточно твоаров!`);
}
orderer = 60;
if (orderer <= total) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else {
  console.log(`На складе недостаточно твоаров!`);
}

orderer = 120;
if (orderer <= total) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else {
  console.log(`На складе недостаточно твоаров!`);
}