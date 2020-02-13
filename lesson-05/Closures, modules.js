"use strict"

function devide() {
	console.log('----------------------------------');
}

//task 1 and 2
function makeBuffer() {
	let bufferValue = "";

	function stringBuffer() {
		return bufferValue;
	}
//1
	stringBuffer.add = function(value) {
		if (isNaN(value))
			bufferValue += value + " ";
		else
			bufferValue += value;
	}

	stringBuffer.print = stringBuffer; 
//2
	stringBuffer.clear = function() {
		bufferValue = "";
	}

	return stringBuffer;
}

let buffer1 = makeBuffer();
buffer1.add("JavaScript");
buffer1.add("Вчити");
buffer1.add("Потрібно!");
console.log(buffer1.print());
devide();

let buffer2 = makeBuffer();
buffer2.add(0);
buffer2.add(1);
buffer2.add(0);
console.log(buffer2.print());
devide();

let buffer3 = makeBuffer();
buffer3.add("Тест");
buffer3.add("тебе не з'їсть");
console.log(buffer3.print());
buffer3.clear();
console.log(buffer3.print());


