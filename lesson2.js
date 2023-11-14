// toán tử 3 ngôi

// let isMale =false;
// let number=10;
// let chk= (!isMale && number%2) ? "Male" :"Famale";
// console.log('chk :>> ', chk);


//


// a=null;
// b=a??0;
// console.log('b :>> ', b);


// //kiểm tra type
// {
//     let a=true;
//     console.log(typeof a);
// }
// console.log("20"-10);


// console.log(105/"abvs");
// console.log(-10/0);
// console.log(typeof NaN);


// {
//   let a= new Number(20);
//   let b= new Number(20);
//   console.log(a==b);
//   console.log('a :>> ', a);
//   console.log(typeof a);
// }
// {
//     let a=10.88;
//     console.log(typeof a.toFixed(1));
//     console.log(Number.isInteger(a));
// }

// {
//     console.log("object".substring(1,3));
// }

// {
//     console.log("toi la toi cua 20 tuoi".replace(/t/i,"A"));
// }

{
    let obj={
        name:"ABC",
        age:32,
        gender:true,
        date:"2000/10/20",
        10:"tenten",
        getNameAge: function(){
           return (this.name + " "+ this.age);
        }
    }
    // console.log(obj);
    // obj.city="HCM";
    // console.log(obj.gender);
    // console.log(obj["age"]);
    // console.log(Object.keys(obj));
    console.log(obj);
    console.log(delete obj.age);
    console.log(JSON.stringify(obj));
}