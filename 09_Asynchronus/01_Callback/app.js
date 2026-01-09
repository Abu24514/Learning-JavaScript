/*
                             .........Callback Functions.............
        A function passed into another function as an argument, and it is executed later—either synchronously or asynchronously
  // ek aisa function jo aap kisi aur function me pass karte ho future me chalane ke liye .

                                   ........... Or...........
       A callback is a function passed as an argument to another function and is executed after the completion of that function.                            

*/

// Example of callback function
function abcd(cb) {
  cb();
}
// function ko argument me pass kiya hai-- callback hai
abcd(function () {
  console.log("hello wolf");
});

/*
                    🍕 Callback Function in Real Life Example (Pizza Analogy)
  
                    Sochiye aapne pizza order kiya. Pizza banana time lega. Aap bolte ho:
      "Jab pizza ready ho jaaye, mujhe call kar dena — main khane aajaaunga."
      Yahan "mujhe call kar dena" = callback function.
    Jab pizza ready hoga, tab ye kaam (pizza khana) trigger hoga.

    */
// Example of callback function in pizza analogy
function orderPizza(callback) {
  console.log("🍕 Making your pizza...");

  setTimeout(() => {
    console.log("✅ Pizza is ready!");
    callback(); // calling your callback function
  }, 6000); // simulate delay
}

orderPizza(function () {
  console.log("😋 Eating the pizza!");
});
