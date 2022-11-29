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

let monthInt = 1;
switch (monthInt) {
    case 1:
        console.log("January");
    break;
    case 2:
        console.log("February")
    break;
}