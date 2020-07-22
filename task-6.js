let input;
console.log(input);
let total = 0;

while (input !== 0) {
  input = prompt("введите число");
  input = Number(input);
  console.log(input);
  total = (total + input);
  }
console.log(total);
alert(total);