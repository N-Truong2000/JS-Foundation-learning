// let a = "1";

// if (a==6)
//     console.log("true");
// else if(a==10)
//     console.log("false");
// else
//  console.log("exception");

// function getDayOfWeek(dayIndex){
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[dayIndex];
// }
// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));


// let a=10;
//  var b= a=="10" ? "true" : "false"
// console.log(b);


// let a=0;
// function  getNumber(a){
// switch(a){
//     case 0:
//         console.log(0);
//         break;
//     case 1:
//         console.log(1);
//        break;
// }
// }
// getNumber(1);


// function getDayOfWeek(dayIndex){
//     let day = "";
//     switch (dayIndex){
//         case 2:
//             day = "Monday";
//             break;
//         case 3:
//             day = "Tuesday";
//             break;
//         case 4:
//             day = "Wednesday";
//             break;
//         case 5:
//             day = "Thursday";
//             break;
//         case 6:
//             day = "Friday";
//             break;
//         case 7:
//             day = "Saturday";
//             break;
//         default:
//             day = "Sunday";
//             break;
//     }
//     return day;
// }
// console.log(getDayOfWeek(6));



function add(a,b){
    if(typeof a !="number" &&typeof b !="number"){
        throw " sai roi";
    }
    return a+b;
}
console.log(add(4,4));


// function divice(a,b){
//     try{
//         if(typeof a !="number"&&typeof b !="number"){
//             throw " no number";
//         }
//         if (b === 0) {
//             throw "no 0";
//         }
//         return a / b;
//     }
//     catch(exception){
//         throw  exception;
//     }
// }

// console.log(divice(1,0));


