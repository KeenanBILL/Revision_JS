// math methods

// console.log("sqrt: ", Math.sqrt(81));

// Return a middle element (s)
// let data = [9, 3, 1, "Peter", 5, 10];
// data.splice(3, 1);
// let onlyNumbers = data.filter( item => {
//     if( typeof item != 'string')
//     return item;
// })
// console.log("Max: ", Math.max(...data));
// let size = data.length -1;
// console.log ("Array size: ", size);
// console.log("Element: ", data[size]);
// console.log("at(): ", data.at(-1));
// let middleIndex = Math.trunc ((data.length - 1)/ 2);
// console.log("middleIndex: ", middleIndex);
// console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));
// if (middleIndex % 2 == 0) {
//     console.log(data.slice(middleIndex,
//         middleIndex + 2));
// } else {
//     console.log(data[middleIndex]);
// }

// ====string methods====
// let sentence = "I love programming";
// console.log(sentence.split(''));

// =====date====

// let myDate = new Date();
// console.log("My date: ", myDate.toLocaleDateString(''))

// let currentDate = myDate.getDate();
// console.log("setDate()", new Date(myDate.setDate(currentDate + 5)));

// let date = moment().format();
// console.log(date);

// let dateFormat = moment().format('YYYY MM D');
// console.log(dateFormat);

// =====if statement=====

// let age = 17;
// if (age < 15) {
//     console.log("You're qualified");
// } else {
//     console.log("You're not qualified")
// };

// ====Nested if statement====

// let duration = 18;
// let salary = 5999;
// if (age < 18) {
//     if(salary >= 20000) {
//         console.log("Well done");
//     } else {
//         console.log("Present the second payslip")
//     }
// } else {
//     console.log("You're not qualified")
// };

// ====Not Nested if statement====

// if ((age > 17) && (salary >= 5000)) {
//     console.log("Great");
// } else {
//     console.log("Thank you, for coming");
// }

// ====switch statement====

// let monthInt = 1;
// switch (monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February")
//     break;
// }

// let x = 5;

// if (x === 10) {
//     console.log ('something');
// } else (x === 5){
//     console.log ('anything');
// }

// let marks = 84;

// switch (true) {
//     case 100:

//     console.log(`You have out done yourself`);

//     break;

//     case(marks >= 90 && marks < 100):

//     console.log(`You have out done yourself 90 times over`);

//     break;

//     case(marks >= 80 && marks < 90):

//     console.log(`You have out done yourself 80 times over`);

//     break;
    
//     default:

//     console.log('There\'s no hope, I\'mm sorry')

//     break;

// }

// ----for loops----

const myCars = [
    'Toyota',
    'BMW',
    'Mercedes-AMG',
    'Bugatti'
];

// let myCar = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: '1996'
// };

// for (let index = 0; index < myCars.length; index++) {
//     const element = myCars;
//     console.log(myCars[3]);
// }

// for (const key in myCar) {
//     console.log(key, myCar[key]);
// }

// for (const y of myCars) {
//     console.log(y);
// }

// ---while loops---

// let cnt = 0;
// while(cnt < 10){
//     console.log(cnt);
//     cnt++;
// }
// let numbers = [8, 5, 3, 6];
// do {
//     console.log(numbers[3]);
//     cnt++;
// } while(cnt < numbers.length); 


// ************************
// ----Factory functions----
// ************************

// let x = 10,
//     y = 9;

// function add() {
//     console.log(x + y);
// }
// function add() {

// let x = document.getElementById("first").value !== undefined ? document.getElementById("first").value :10;
// let y = document.getElementById("second").value !== undefined ? document.getElementById("first").value :9;

// console.log (x + +y);

// }

// function add() {
//     return x + y;
// }

// console.log(add());

// let person = {
//     name: 'Jason',
//     surname: 'Doe',
//     age: 30
// }

// let person2 = {
//     name: 'Jason',
//     surname: 'Doe',
//     age: 30
// }

// function createPeople(name, surname, age) {
//     return {
//         name,
//         surname,
//         age
//     }
// }

// let person1 = createPeople('Keenan', 'Davids', 50);
// console.log(person1)

// ----constructor functions-----

// function CreatePerson(name, surname, age) {
//     this.name
//     this.surname
//     this.age
// }

// let person1 = new CreatePerson('Puleng', 'Xolani', 25)

// console.log(person1)

