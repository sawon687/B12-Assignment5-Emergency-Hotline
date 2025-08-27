function getElement(id) {
  return  document.getElementById(id);
}
 
function getInnerText(avalibleCoin) {
    return avalibleCoin.innerText
}
// love count dynamic section start
      
    const heartBtns =document.getElementsByClassName('heartBtn');
let count=0;
    for(const heartBtn of heartBtns)
    {    
        heartBtn.addEventListener('click',function(params) {
            count++;
            let loveCount=  getElement('loveCount')
               
                loveCount.innerText=count;
          
        })
    }
// love count dynamic section end




// call section

  const callBtns=document.getElementsByClassName('cal-btn');
  
 for(const callbtn of callBtns)
      {
         callbtn.addEventListener('click',function(e) {
          
          

     

  const title=   callbtn.parentElement.parentElement.children[1].querySelector('.title')
           const titleText=title.innerText;
           console.log(titleText)
           
         const callNumber=  callbtn.parentElement.parentElement.children[1].querySelector('.callNumber')
         const callNum=callNumber.innerText
          const time=new Date().toLocaleTimeString();
       console.log(time);

         console.log(callNum)

  const avalibleCoin = getElement('avaliblecoin');
    let avalibleCoinInner = Number(getInnerText(avalibleCoin));

        if(avalibleCoinInner <= 100) {
            alert(`📞 ${titleText} ${callNum}`);
          avalibleCoinInner =   avalibleCoinInner - 20;  // Deduct coins
            avalibleCoin.innerText = avalibleCoinInner;
        } else {
            alert("Not enough coins!");
        } 
    


       const container=getElement('history-container');
             

       const div=document.createElement('div');

       div.innerHTML=`  <div class="bg-gray-100 py-5 px-3 rounded-lg shadow-md flex justify-between items-center">
      <!-- Left: title + number -->
      <div class="flex flex-col">
        <h1 class="text-[#111111] text-lg font-semibold text-ellipsis ">
        ${titleText}
        </h1>
        <h2 class="text-[#5c5c5c] font-semibol text-sm">${callNum}</h2>
      </div>

      <!-- Right: time -->
      <div>
        <span class="text-sm font-semibold text-gray-600">${time}</span>
      </div>
    </div>`

          container.appendChild(div);

            
         })

       

      }
      
         
