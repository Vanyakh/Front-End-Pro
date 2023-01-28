//Цикл js, який виводить числа від 20 до 30 через пропуск 0,5:

for (let i = 20; i <= 30; i += 0.5) {
console.log(i);
}
//Розрахунок вартості 10, 20, 30... 100 доларів, при тому, що один долар коштує 27 гривень:

for (let i = 10; i <= 100; i += 10) {
let usd = i;
let uah = usd * 27;
console.log(`${usd} USD = ${uah} UAH`)
}


//Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа n:

let n = 100;
for (let i = 1; i <= 100; i++) {
if (i * i <= n) {
console.log(i);
}
}

//З'ясувати, чи є дане ціле число простим:

let n = 7;
let isPrime = true;
for (let i = 2; i < n; i++) {
if (n % i == 0) {
isPrime = false;
break;
}
}
if (isPrime) {
console.log(`${n} is a prime number.`)
} else {
console.log(`${n} is not a prime number.`)
}

//Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь:

let n = 13;
let isPossible = false;
for (let i = 0; i < n; i++) {
if (3 ** i == n) {
isPossible = true;
break;
}
}
if (isPossible) {
console.log(`${n} can be obtained by raising 3 to some power.`)
} else {
console.log(`${n} cannot be obtained by raising 3 to some power.`)
}