let h5 = document.querySelector("h5")
let btn = document.querySelector("button")

let flag=0;
btn.addEventListener("click",function(){
      if(flag==0){
            h5.innerHTML="Apna bhai"
            h5.style.color= "green"
            btn.innerHTML="Remove"
             flag=1
      }else{
            h5.innerHTML="Stranger"
            h5.style.color= "red"
            btn.innerHTML="Add apna bhai"
             flag=0
      }
     

})