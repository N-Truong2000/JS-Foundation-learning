//callback
// function pritn(name){
//     console.log( "my name is " + name );
// }

// function pritnSomename(names, callback){
//    for(const name of names ){
//     callback(name);
//    }
// }

// let names=["a","B","c"]

// pritnSomename(names,pritn);


// Asyncchronous

// function doSomething(){
//     console.log("ABCC");
// }
// setTimeout(doSomething,5000);

// console.log("object");

// let x=1;
// function laoddata(x){
//     console.log(x+5);
//     return x+5;
// }
// setTimeout(laoddata,3000);
// console.log(x);


//promsie
// let promise =new  Promise(function(resolve,reject){
//     let flag=true

//     if(flag){
//         resolve("ok");
//     }else{
//         reject("error")
//     }
// });

// function aResolve(vaule){
//     console.log("Ahihi "+ vaule);
// };
// function aReject(error){
//     console.log("Ahihi "+ error);
// }
// promise.then(aResolve,aReject)



function calculatorTwoNumbers(a,b,callback){
    return callback(a,b);
}

  function add(a,b){
   return a+b;
  }
  function sub(a,b){
    return a-b;
  }
  function mult(a,b){
    return a*b;
  }
  function dev(a,b){
    return a/b;
  }
const resultAdd = calculatorTwoNumbers(5, 3, add);
const resultSub = calculatorTwoNumbers(5, 3, sub);
const resultMult = calculatorTwoNumbers(5, 3, mult);
const resultDev = calculatorTwoNumbers(6, 2, dev);

console.log('resultAdd:', resultAdd); 
console.log('resultSub:', resultSub); 
console.log('esultMult:', resultMult); 
console.log('esultMult:', resultDev);


// function abc(){
//     console.log("hello");
// }

// console.log(setInterval(abc,1000));


async function doSomething(){
    let promise =new  Promise(function(resolve,reject){
        setTimeout(()=>
           resolve("ok"),3000);
           reject("error")
        });
    await promise.then((value)=>{
        console.log(value);
    }).catch((erro)=>{
        console.log(erro);
    })
    console.log("wwwww");
};
doSomething();



