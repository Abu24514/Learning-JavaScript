const sel = document.querySelector("select");
const h1 = document.querySelector("h1");

const fruitColors = {
  apple: "red",
  mango: "orange",
  guvava: "lightgreen",
  pinapple: "gold",
  orange: "darkorange",
};

sel.addEventListener("change", (e) => {
  const fruit = e.target.value;
  // e.target.value → select tag me jo value user ne choose ki hai, wo milegi.

  h1.innerHTML = `
            <span style="color:${fruitColors[fruit] ?? "black"}">
                 ${fruit[0].toUpperCase() + fruit.slice(1)}
            </span> fruit Selected
        `;
});

/*
        //         <span> → inline element jo text ka ek part alag style karne ke liye use hota hai
        //                  Yahaan span me color apply kar rahe hain, taki sirf fruit ka naam color ho.
    
        //         ${fruit[0].toUpperCase()} → fruit name ka first letter uppercase me convert karta hai
        //                                      Example: "apple" → "A"
    
        //         fruit.slice(1) → string ka first character chhod ke baaki letters return karta hai
        //                           Example: "apple".slice(1) → "pple"
        //                           Iska matlab → First letter uppercase + baaki same
        //                           Output: "Apple"
        //     */
// });
