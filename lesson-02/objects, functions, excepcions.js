"use strict"
//task 1
let user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
console.log(user);

user.name = "СЕРГІЙ";
console.log(user);

delete user.name;
console.log(user);

//task 2
let employeeSalaries = {};
employeeSalaries[1] = 10000;
employeeSalaries[2] = 15000;
employeeSalaries[3] = 20000;
console.log(employeeSalaries);

let sum = 0;
let counter = 0;

for ( let employee in employeeSalaries) {
	sum += employeeSalaries[employee];
	counter++;
}

if (counter == 0) {
	console.log("Кількість працівників: 0");
} else {
	console.log("Сума всіх зарплат працівників: " + sum);
}

//task 3
function operations(num1, num2, type){
	let result = 0;
	try{
		if((num1 === '') || (num2 === '')) {
			throw "Некоректні вхідні дані";
		}
		
		switch(type){
		case'*': { console.log(num1 * num2); break; }
		case'/': {
			if(num2 === 0) {
				throw "Ділення на 0"; break;
			} else {
				console.log(num1 / num2); break; }
			}
		case'+': { console.log(num1 + num2); break; }
		case'-': { console.log(num1 - num2); break; }
		default: { throw "Некоректний тип операції";}
		}
		
	}catch(err){
		console.log(err);
	}
	}

operations('','','*');
operations(4,2,'*');
operations(4,2,'/');
operations(4,0,'/');
operations(4,2,'+');
operations(4,2,'-');
operations(4,2,'#');
