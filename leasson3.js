let arr=["A","B","c","d"];

let arrNumber=[1,2,3,4,11,23,12,32,15];
 
// console.log(arrNumber);
// console.log(arrNumber[0]);
// console.log(arrNumber[5]);
// arrNumber[1]=5;
// console.log(arrNumber);
// arrNumber[5]=4;
// console.log(arrNumber);

// arr.push("QQQQ");
// console.log(arr);

// arr.unshift("TTT");
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(1,2,"d","f");
// console.log(arr);

// arr.splice(1,2);
//  console.log(arr);
 

//  arr.slice(0,2);
//  console.log( arr.slice(2,4));

//  let a=arr.join(" ");
//  console.log(a);


// delete arr[1];
// console.log(arr);
// console.log(arr.length);


// arr.sort();
// arrNumber.sort(function (a,b){
//     return a+b;
// });
// console.log(arr.reverse());
// console.log(arrNumber);

const stu=[
    {
        name: "truong",
        age:12
    },
    {
        name: "tan",
        age:17
    },
    {
        name: "son",
        age:15
    },
    {
        name: "truong",
        age:23
    }
]
stu.sort(function(a,b){
    return a.age - b.age;
  });
  for(let i=0;i<stu.length;i++)
  console.log(stu[i]);

 // console.log(new Date("11/20/2003 20:30:01"));