// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// 🌐 States of a Promise:

// 1. Pending → Initial state (waiting).

// 2.Fulfilled → Operation completed successfully (resolved).

// 3.Rejected → Operation failed (error).

// <------------syntax------------->
let ans = new Promise((res, rej) => {
  if (true) { // check it  write true or false
    return res();
  } else {
    return rej();
  }
});
// <------------Consuming a Promise:------------->
ans
  .then(function () {
    console.log("resolve hogaya tha!");
  })
  .catch(function () {
    console.log("reject hua tha!");
  });

 
// <-------- second syntax ------>

/* const promise = new Promise(function(resolve , reject){
  let  random = Math.floor(Math.random()*10);
  if (random>5) {
    resolve("resolved with"+ " "+ random);
  } else {
    reject("reject with" + " " + random);
  }
});

// <------------Consuming a Promise:------------->
promise
  .then(function(response) {
    console.log(response); // runs if resolved
  })
  .catch(function(error) {
    console.error(error); // runs if rejected
  }); */