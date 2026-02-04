// ------ Problem------>
/* 
Ager tumhe kai saare object create karne ho to tum saare object ko alag alag variable me store karoge , jo ki naye naye objects bnaayegi aur wo har object apna data khud hold karega and last mein , jitne bhi methods  honge wo data share karenge 
*/

// object --->
/* 
object ko create karna jo ki sirf data hold na kare balki unki functionality bhi hold kare , aur aise object ko create kare with a blueprint model.

*/
// Class --->
/* 
class banate hai taaki usse naye object create kar sake.
*/

// Constructor function (old way)----->
/* 
purana tareeka objects banane ka ek Constructor function se jab javascript mein class ka concept nhi tha 
*/

// function Toffee() {
//   this.flavour = "chocolate";
//   this.price= 1.99;
//   this.expiry = "2026-12-31";
// }

// let t1 = new Toffee();

function Toffee(flavour , price , expiry) {
  this.flavour = flavour;
  this.price= price;
  this.expiry = expiry;
}

let t1 = new Toffee( "chocolate" , 2.55 , "2025-08-22");
let t2 = new Toffee("vanila" , 3.56 , "2026-12-29");


// ager funtion ko kabhi bhi call karte wakt tumhe new ka use kar liya turant man mein ek blank object banaao

// jab bhi function mein this ko dekho turant us blank object ko yaad karke us jagah rakhdo
