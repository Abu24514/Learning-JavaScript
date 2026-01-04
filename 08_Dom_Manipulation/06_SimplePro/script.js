let arr=[
      {
           team:'RCB',
           backgroundImage:"url('asset/rcb.jpg')",
           primary:' #D1121B',
           secondary:' #FFD700'
      },

      {
            team:'CSK',
            backgroundImage:"url('asset/csk.jpg')",
            primary:' #FFC107',
            secondary:' #003087'
       },
       {
            team:'MI',
            backgroundImage:"url('asset/Mi.jpg')",
            primary:' #004BA0',
            secondary:' #FFD700'
       },
       {
            team:'GT',
            backgroundImage:"url('asset/Gt.jpg')",
             primary:' #1C2526  ',
            secondary:' #FFD700 '
           
       },
       {
            team:'LSG',
            backgroundImage:"url('asset/Lsg.jpg')",
             primary:' #00A1D6 ',
            secondary:' #FF5722'
           
       },
       {
            team:'PKBS',
            backgroundImage:"url('asset/Pkbs.jpg')",
            primary:'  #D32F2F ',
            secondary:' #ffffff '
       },
       {
            team:'SRH',
            backgroundImage:"url('asset/srh.jpg')",
            primary:' #F28C38 ',
            secondary:'#000000 '
       },
       {
            team:'RR',
            backgroundImage:"url('asset/RR.jpg')",
            primary:' #FF69B4  ',
            secondary:'  #003087 '
       },
       {
            team:'KKR',
            backgroundImage:"url('asset/KKr.jpg')",
            primary:'  #3C2F7D ',
            secondary:' #FFD700'
       },
       {
            team:'DC',
            backgroundImage:"url('asset/DC.jpg')",
            primary:' #0033A0',
            secondary:'  #E63946 '
       },


]
let btn = document.querySelector('button')
let Logo =document.querySelector('.imageBox')
let h1 =document.querySelector('h1')

btn.addEventListener("click",function(){
    let num= Math.floor( Math.random()*arr.length)
//     console.log(arr[num]);
let winner= arr[num]
h1.innerHTML = winner.team
h1.style.backgroundColor = winner.primary
h1.style.color = winner.secondary
Logo.style.backgroundImage =winner.backgroundImage   
})
