// -------------------------- Home work --------------------------
// -------------------------- Тарадай Дмитрий --------------------------

// --------------------------Преобразование примитивов. Задачи.---------

// Чему равно а, почему?

let a = 0 || 'string';
// a = string; //true
// // (Логическое ИЛИ) Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор || возвращает true, если один из операндов true; если же оба false, то возвращает false.

a = 1 && 'string';
// // (Логическое И) Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор && возвращает true, если оба операнда true; в противном случае возвращает false.
// a = string; //true

a = null || 25;
// a = 25; //true

a = null && 25;
// a = null; //false

a = null || 0 || 35;
// a = 35; //true

a = null && 0 && 35;
// a = null; //false


// --------------------------Что отобразится в консоли. Почему?------------------------

12 + 14 + '12';
// (12 + 14) + '12' --> '26' + '12' --> 2612

3 + 2 - '1';
// (3 + 2) - '1' --> 5 - 1 = 4

'3' + 2 - 1;
// ('3' - '2') - 1 --> 32 - 1 = 31

true + 2;
// 1 + 2 = 3

+'10' + 1;
// 10 + 1 = 11 (Преобразование к числу, унарный плюс +)

undefined + 2;
//undefined + 2 = NaN (undefined при преобразовании к числу даёт NaN)

null + 5;
//null + 5 = 5 (При преобразовании в число null становится = 0)

true + undefined
// true + undefined = NaN;

//---------------------------------If else. Задачи----------------------------------

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let variable = 'visible';
if (variable==='hidden') {
	variable = 'visible';
} else {
	variable = 'hidden'
}

// 2.Используя if, записать условие:
	// a. если переменная равна нулю, присвоить ей 1;
	// b. если меньше нуля - строку “less then zero”;
	// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

variable = - 15;
if (variable === 0) {
	variable = '1';
};
if (variable < 0) {
	variable = 'less then zero';
};
if (variable > 0) {
	variable = variable *= 10;
};

// 3. 	Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//		Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 
//		'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};

if (car.age > 5) {
	console.log('Need Repair'),
	car.needRepair = true
} else {
	car.needRepair = false	
}

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать 
// поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  
// что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.
// иначе если поля discount нет то вывести просто поле price в консоль.
let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15'
};
if (item.discount) {
	item = {
		name: 'Intel core i7',
		price: '100$',
		discount: '15%',
		priceWithDiscount: parseInt(item.price,10) - parseInt(item.price,10) * parseInt(item.discount,10) / 100 + '$',
	};
		console.log(item.priceWithDiscount)
} else {
	console.log(item.price);
}

// 5. Дан следующий код:
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и
// меньше или равна максимальной цене то вывести в консоль название этого товара, 
// иначе вывести в консоль что товаров не найдено.

if (min <= parseInt(product.price,10) && parseInt(product.price,10) <=max) {
	console.log(product.name)
} else {
	console.log('товаров не найдено')
}

// -------------------------Тернарный оператор. Switch case. Задачи.-------------------------
// 1.Записать в виде switch case следующее условие:
	// if (a === 'block') {
	// 	console.log('block');
	// } else if (a === 'none') {
	// 	console.log('none');
	// } else if (a === 'inline') {
	// console.log('inline');
	// } else {
	// 	console.log('other');
	// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
switch (a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
}
// 2 Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

	// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

variable = 'visible';
variable === 'hidden' ? variable = 'visible' : variable = 'hidden';

	// 2.Используя if, записать условие:
	// a. если переменная равна нулю, присвоить ей 1;
	// b. если меньше нуля - строку “less then zero”;
	// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

variable = - 15;
variable === 0 ? variable = '1' : 
	variable < 0 ? variable = 'less then zero':
	variable = variable *= 10;

// 3. 	Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//		Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 
//		'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};

car.age > 5 ? (car.needRepair = true, console.log('Need Repair')) : car.needRepair = false;