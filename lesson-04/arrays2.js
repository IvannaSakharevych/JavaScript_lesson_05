"use strict"

function devide() {
	console.log('------------------------------------------------------');
}


//task 1
let numbers = [11, -22, 33, -44, 55, 66, -77, 88, -99, 100, -8, 5, -7, 2, -1, 0, -9, 4, -6, 3];
//console.log(numbers);

//a
function compareNumbersASC(a, b){
	return a - b;
}
numbers.sort(compareNumbersASC);
console.log(numbers);

//b
function compareNumbersDESC(a, b){
	return b - a;
}
numbers.sort(compareNumbersDESC);
console.log(numbers);
devide();


//task 2
function positiveNumbers(x){
	return x >= 0;
}
let newPositiveNumbers = numbers.filter(positiveNumbers);
console.log(newPositiveNumbers);

function negativeNumbers(x){
	return x < 0;
}
let newNegativeNumbers = numbers.filter(negativeNumbers);
console.log(newNegativeNumbers); 
devide();


//task 3
let Student1 = { yearOfStuding: 2009, facultyName: 'Geography Faculty' };
let Student2 = { yearOfStuding: 2010, facultyName: 'Faculty of Economics' };
let Student3 = { yearOfStuding: 2011, facultyName: 'Faculty of Foreign Languages' };
let Student4 = { yearOfStuding: 2012, facultyName: 'Faculty of History' };
let Student5 = { yearOfStuding: 2008, facultyName: 'Faculty of Architecture' };
let Student6 = { yearOfStuding: 2009, facultyName: 'Faculty of Pedagogy' };
let Student7 = { yearOfStuding: 2010, facultyName: 'Faculty of Mathematics' };
let Student8 = { yearOfStuding: 2011, facultyName: 'Faculty of Finance' };
let Student9 = { yearOfStuding: 2012, facultyName: 'Faculty of Philology' };
let Student10 = { yearOfStuding: 2013, facultyName: 'Faculty of Law' };

let Students = [];
Students.push(Student1, Student2, Student3, Student4, Student5, Student6, Student7, Student8, Student9, Student10);
//console.log(Students);

//a
let facultyNameArray = Students.map(function(item){ return item.facultyName });
console.log(facultyNameArray);
devide();

//b
let yearsSum = Students.reduce(function(sum, item){ return sum + item.yearOfStuding }, 0);
console.log(yearsSum);
