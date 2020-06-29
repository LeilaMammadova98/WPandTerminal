
let btn1=document.querySelector('#btn1')
let btn2=document.querySelector('#btn2')
let messageWrite2=document.querySelector('#writeMessage2')

let messageWrite=document.querySelector('#writeMessage')
let note1=document.querySelector('#note1')
let note2=document.querySelector('#note2')
let body1=document.querySelector('#mainbody1')
let body2=document.querySelector('#mainbody2')
let list1=document.querySelector('#list1')
let list2=document.querySelector('#list2')




// btn1.addEventListener('click',function(){
//   let value1=messageWrite.value;

//   if(value1.length<1){
//       return
//   }

//   let li1=document.createElement('li');
  
//   list2.appendChild(li1)
//   li1.textContent=messageWrite.value;

//   list1.appendChild(li1)
//   li1.textContent=messageWrite2.value;


//   messageWrite.value='';
//   let br=document.createElement('br')
//   list2.appendChild(br)

// })

btn1.addEventListener('click',function(){

    
    setTimeout(() => {

    let value1=messageWrite.value;
  
    if(value1.length<1){
        return
    }
  
    let li1=document.createElement('li');///sol
    let li2=document.createElement('li');//sag
    
    list2.appendChild(li2) 
    list1.appendChild(li1) 





 li1.textContent=messageWrite.value;
    li2.textContent=messageWrite.value;
 document.querySelector('#audio').play();
    li1.classList.add('me','right')
    li2.classList.add('left','notme')
    // let audio=document.createElement('audio');

    // li2.appendChild(audio)
    
   
    
  
  
  
    messageWrite.value='';
    let br1=document.createElement('br')
    let br2=document.createElement('br')

      list1.appendChild(br1)
    list2.appendChild(br2)

        
    }, 1800);

   

  
  })





  btn2.addEventListener('click',function(){

    setTimeout(() => {
     let value2=messageWrite2.value;
  
    if(value2.length<1){
        return
    }
  
    let li1=document.createElement('li');///sol
    let li2=document.createElement('li');//sag
    
    list2.appendChild(li2) 
    list1.appendChild(li1)   

   
    li2.textContent=messageWrite2.value;
    li1.textContent=messageWrite2.value;
     document.querySelector('#audio1').play();
   
    li2.classList.add('right','me')
    li1.classList.add('left','notme')

    
  
  
  
    messageWrite2.value='';
    let br1=document.createElement('br')
    let br2=document.createElement('br')

      list1.appendChild(br1)
    list2.appendChild(br2)
     
    }, 2000);
  
  
  })


