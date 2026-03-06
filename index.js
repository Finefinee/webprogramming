// 1. 지불금액(pay): 10000원, 물건가격(price): 1500원, 구매 개수(num) 5개일 때, 거스름돈을 계산하는 프로그램을 작성하고 캡쳐하여 제출하세요.
// 2. 킬로미터를 마일로 환산하는 프로그램을 작성하고, 이를 캡쳐하여 제출하세요.

let pay = 10000;
let price = 1500;
let num = 5;

let left = pay % (price * num);
console.log(left);