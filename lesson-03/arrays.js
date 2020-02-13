"use strict"

function devide() {
	console.log('------------------------------------------------------');
}


//task 1
let products = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10'];

let lastElement = products[products.length - 1];
console.log(lastElement);
devide();


//task 2
let styles = ['Джаз', 'Блюз'];
console.log(styles);
//Додайте в кінець значення «Рок-н-Ролл»
styles.push('Рок-н-Ролл');
console.log(styles);
//Замініть передостаннє значення на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
styles.splice(-2, 1, 'Класика');
console.log(styles);
//Видаліть перше значення масиву і виведіть його на консоль.
console.log(styles.shift());
//Додайте в початок значення «Реп» і «Реггі».
styles.unshift('Реп', 'Реггі');
console.log(styles);
devide()


//task 3
function find(arr, value){
	let valueN = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			valueN = i;
		}
	}
	return valueN;
}
console.log(find(products, 'product1'));
console.log(find(products, 'product11'));
devide()


//task 4
let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function filterRange(array, a, b){
	console.log(array.slice(a, b+1));
}
filterRange(numbers, 2, 6);
devide()


//task 5
function camelize(str){
	let string = str.split('-');
	for (let i = 1; i < string.length; i++) {
		string[i] = string[i].toUpperCase().charAt(0) + string[i].slice(1, string[i].lenght);
	}
	return string.join('');
}
console.log(camelize('my-short-string'));
