/* 
 Jab bhi constructor banaoge aur kuch aise mil gaya jo ki sabmein same hai to usey kabhi bhi direct constructor mein banana galat takeeka hota hai , par sahi tareeka hai prototype ka use karna kyonki prototype mein save karne par jitne bhi new ke saath instace banaaoge wo saare instace by defualt tumhari proto ki value hold karegen.
 
 */
// function Toffee(name) {
//   this.name = name;
// }
// //  prototype
// Toffee.prototype.price = 10;

// let t1 = new Toffee("alpeliebe");
// let t2 = new Toffee("pulse candy");
// let t3 = new Toffee("kachha aam");

// -----------   or -------------

function Employee(name, age, id, salary) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.salary = salary;
}

Employee.prototype.info = function () {
  console.log(
    ` My name is ${this.name} , I am ${this.age} year old , my id is ${this.id} and my salary is ${this.salary} `
  );
};

let e1 = new Employee("Mohan", 28, 1234, 50000);
let e2 = new Employee("Ramu", 32, 4545, 80000);
