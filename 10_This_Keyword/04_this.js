// ======================================================
// 4️ Arrow Function as Method → window
// ======================================================

const emp = {
  name: "Ajay",
  sayName: () => {
    console.log(this.name);
  },
};

emp.sayName();

/*
Arrow functions do NOT have their own "this".
They take "this" from their surrounding scope.

Here surrounding scope is global → window
So this.name is undefined.
*/