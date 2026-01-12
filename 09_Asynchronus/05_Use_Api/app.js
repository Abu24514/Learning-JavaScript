
// using emplicit return 

fetch('https://randomuser.me/api/?results=2')
.then(function(rawdata){
return rawdata.json();
 
})
.then(function(data){
    console.log(data);
    
})
.catch(function(err){
console.log(err);

})


// <---------- or --------->
// using emplicit return 
/* 
fetch('https://randomuser.me/api/?results=2')
.then((raw)=>raw.json())
.then((data)=>console.log(data)); */

// using async and await

//  async function abcd (){
//     let raw = await fetch('https://randomuser.me/api/?results=1');
//     let ans = await raw.json ();

//     console.log(ans);
// }

// abcd();


