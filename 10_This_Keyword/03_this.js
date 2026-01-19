// ======================================================
// 3 ES5 Method (Normal Function inside Object) → object
// ======================================================

const obj = {
  name: "Rahul",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName();

/*
When a function is called as a method of an object,
"this" refers to that object.

Here: this === obj
*/