let input;
console.log(input);
let total = 0;

while (input !== 0) {
  input = prompt("введите число");
  console.log(input);
  if (input === null) {
    break;
  }
  total = total + Number(input);
}
console.log(total);
alert(total);
