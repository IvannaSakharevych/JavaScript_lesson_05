"use strict"
//task 1
let admin;
let name;
name = 'John';
admin = name;
console.log(admin);

/* or
 let name = 'John';
 let admin = name;
 console.log(admin);
*/

//variables for task 2 and task 3
let login;
let password;
login = 'Admin';
password = 'TheMaster';

console.log("Who's there?");

//task 2
if (login == 'Admin'){
	console.log("Password?");
		if(password == 'TheMaster'){
			console.log("Welcome!");
		} else if (password != 'TheMaster') {
			console.log("Wrong password");
		} else {
			console.log("Canceled");
		}	
} else if (login != 'Admin') {
	console.log("I don't know you");
} else {
	console.log("Canceled");
}

//task 3
switch(login) {
	case'Admin': { console.log("Password?");
		if(password == 'TheMaster'){
			console.log("Welcome!");
		} else if (password != 'TheMaster') {
			console.log("Wrong password");
		} else {
			console.log("Canceled");
		} break;
	}
	case'Cancel': { console.log("Canceled"); break; }
	default: { console.log("I don't know you"); break; }
}

/*or
switch(login) {
	case'Admin': { console.log("Password?");
		switch(password) {
			case'TheMaster': { console.log("Wrong password"); break; }
			case'Cancel': { console.log("Canceled"); break; }
			default: { console.log("Wrong password"); break; }
			}
		} break;
	case'Cancel': { console.log("Canceled"); break; }
	default: { console.log("I don't know you"); break; }
	}
*/