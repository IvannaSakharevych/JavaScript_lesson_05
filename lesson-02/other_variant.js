// task 1 
let user = {}
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
console.log(user);

user.name = "СЕРГІЙ";
console.log(user);

delete user.name;
console.log(user);

//task 2 
let employeeSalaries = {
	salary1 : 10000,
	salary2 : 15000,
	salary3 : 20000
};
let sum= 0;
let counter = 0;
for ( let key in employeeSalaries) {
	counter++;
}
if (counter != 0) {
	for ( let key in employeeSalaries) {
		sum = sum + employeeSalaries[key];
	}
}
console.log("Сума всіх зарплат працівників: " + sum);

/* or
let employeeSalaries1 = {
	salary1 : 10000,
	salary2 : 15000,
	salary3 : 20000
};
let sumaSalaries1 = 0;
if (Object.keys(employeeSalaries1).length != 0) {
	for ( let key in employeeSalaries1) {
		sumaSalaries1 = sumaSalaries1 + employeeSalaries1[key];
	}
}
console.log("SumaSalaries1=" + sumaSalaries1);
*/

//task 3
function operations(num1, num2, type) {
	try {
		if (isNaN(num1) || isNaN(num2)) {
			throw new TypeError("Not is number num1 or num2 ");
		}
		switch (type) {
		case '+':
			console.log(num1 + num2);
			break;
		case '-':
			console.log(num1 - num2);
			break;
		case '*':
			console.log(num1 * num2);
			break;
		case '/':
			console.log(num1 / num2);
			break;
		default:
			console.log("Error!")
		}
	} catch (err) {
		console.log("Error happend!" + err);
	}
}
operations(2, 3, '+');
operations(2, 3, '-');
operations(2, 3, '*');
operations(2, 3, '/');
operations('e2', 2, '/'); // error


/* or
function operations(num1, num2, type) {
	try {
		if (isNaN(num1) || isNaN(num2)) {
			throw new TypeError("Not is number num1 or num2 ");
		}

		switch (type) {
		case '+':
			return (num1 + num2);
		case '-':
			return (num1 - num2);
		case '*':
			return (num1 * num2);
		case '/':
			return (num1 / num2);
		default:
			return 0;
		}
	} catch (err) {
		console.log("Error happend!" + err);
	}
}
console.log(operations(2, 8, '+'));
console.log(operations(2, 'e8', '+'));// error
*/
