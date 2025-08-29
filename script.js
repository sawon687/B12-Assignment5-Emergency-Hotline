
//  getId
function getElement(id) {
  return  document.getElementById(id);
}
//  get innerText
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



//  function coin update

function reduceCoinUpdate(avalibleCoinInner,avalibleCoin) {
       
          avalibleCoinInner =   avalibleCoinInner - 20;  // Deduct coins
           return avalibleCoin.innerText = avalibleCoinInner;
}

function createCallHistory(titleText,callNum,time) {
   const container=getElement('history-container');
             

       const div=document.createElement('div');

       div.innerHTML=`  <div class="bg-[#fafafa] py-5 px-3 rounded-lg shadow-md flex justify-between items-center">
      <!-- Left: title + number -->
      <div class="flex flex-col">
        <h1 class="text-[#111111] text-lg font-semibold text-ellipsis ">
        ${titleText}
        </h1>
        <h2 class="text-[#5c5c5c] font-semibold text-sm">${callNum}</h2>
      </div>

      <!-- Right: time -->
      <div>
        <span class="text-sm font-semibold text-gray-600">${time}</span>
      </div>
    </div>`

          container.appendChild(div);

}

// 

// clearBtn function
function clearBtn() {
   getElement('clearBtn').addEventListener('click',function () {
      const container=getElement('history-container');
      container.innerHTML='';
   })


}
// clear btn function call
clearBtn()


// call section

  const callBtns=document.getElementsByClassName('cal-btn');
  
 for(const callbtn of callBtns)
      {
         callbtn.addEventListener('click',function(e) {
          
         
        
    //  dom traversing text titile and call number  start here section

     const title= callbtn.parentElement.parentElement.children[1].querySelector('.title')
           const titleText=title.innerText;
         
           
         const callNumber=  callbtn.parentElement.parentElement.children[1].querySelector('.callNumber')
         const callNum=callNumber.innerText
        //  local time string 
          const time=new Date().toLocaleTimeString();
        
    //  dom traversing text titile and call number end here section
      
          //  avalible conin
          const avalibleCoin = getElement('avaliblecoin');
           let avalibleCoinInner = Number(getInnerText(avalibleCoin));
                       
        if(avalibleCoinInner >=20) {
            
            alert(`📞Calling ${titleText} ${callNum}`);
            reduceCoinUpdate(avalibleCoinInner,avalibleCoin);
            createCallHistory(titleText,callNum,time);
        } else {
            alert("❌ You have no coins! At least, you need to call 20 coins ");
        } 
    

            
         })

       

      }

        let copyCount=0;

      // copy function
   function copyTextandCountCopy() {
     const copyCountBtn=getElement('copyCount')
    const copyBtns=  document.getElementsByClassName('copBtn')
  
      
      for(const copyBtn of copyBtns)
      
      copyBtn.addEventListener('click',function() {

         console.log('bondhu clicked');
           copyCount++;
             copyCountBtn.innerText=copyCount;
             
             const callNumber=copyBtn.parentElement.parentElement.children[1].children[2]
             const callNumCopy=callNumber.innerText;

          navigator.clipboard.writeText(callNumCopy)
            alert(`✅Copied ${callNumCopy}`)
                // Toast style copy feedback
      
        
      })
   }
         
copyTextandCountCopy()