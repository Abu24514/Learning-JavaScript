// ======================================================
// 6️ Arrow Function inside ES5 Method → object
// ======================================================

const police = {
  name: "Salim",
  sayName: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

police.sayName();

/*
Arrow function takes "this" from parent function.
Parent function's this === police

So this.name === "Salim"
*/
