// class Car{
//   ten;
//   color;
//   #branch;
// //   constructor(name){
// //     this.ten=name;
// //   }
//   constructor(name,color,branch){
//     this.ten=name;
//     this.color=color;
//     this.#branch=branch;
//   }
 
//   set ten(name){
//     this.name=name;
//   }
//   get ten(){
//    return this.name;
//   }
//   set color(color){
//     this.color=color;
//   }
//   get color(){
//    return this.color;
//   }
// driving(){
//     console.log("OKOK"+ this.name);
// }
// getFullName(){
//     return this.#branch + this.name;
// }
// }

// let car=new Car("Abc");
// console.log(car.ten);
// car.ten="123";
// console.log(car.ten);


// let car1=new Car("Abc");
// console.log(car1.name="123");
// car1.driving();
// console.log(car1.getFullName());

class Animal{
    name;

constructor(name){
    this.name=name;
  }
printName(){
    console.log("My name is "+ name);
}
  #defaultAction(){
    console.log("do something");
  }
}


class Dog extends Animal{

    legs;
    constructor(name,legs){
        super(name):
        this.legs=legs;
      }

  sound(){
    console.log("Ga GA Ga");
  }
}