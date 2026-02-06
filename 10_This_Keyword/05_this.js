// ======================================================
// 5️ ES5 Function inside ES5 Method → window
// ======================================================

const cops = {
  name: "Madan",
  sayName: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

cops.sayName();

/*
inner() is a normal function.
So "this" inside inner() refers to window, NOT cops.

So this.name is undefined.
*/