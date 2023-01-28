let numorstr = prompt('input number or string');
console.log(numorstr);

switch(numorstr) {
case null:
console.log('ви скасували');
break;
case '':
console.log('empty string');
break;
default:
if (!isNaN(+numorstr)) {
console.log('ok!');
} else {
console.log('number is ba_nan');
}
}