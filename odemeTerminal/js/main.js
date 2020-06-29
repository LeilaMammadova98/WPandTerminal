'use strict'
window.addEventListener('load',function(){


    let narBtn=document.querySelector('#narBtn')
    let azBtn=document.querySelector('#azBtn')
    let bakBtn=document.querySelector('#bakBtn')
    let walletBtn=document.querySelector('#walletBtn')
 






  document.querySelector('#information').textContent=Number(localStorage.getItem('amount')).toFixed(2);








    
    narBtn.addEventListener('click',function(e){
      
        // let el=e.currentTarget;
         window.location.href='nar.html'
    })
    
    azBtn.addEventListener('click',function(e){
      
        // let el=e.currentTarget;
         window.location.href='azercell.html'
    })
    bakBtn.addEventListener('click',function(e){
      
        // let el=e.currentTarget;
         window.location.href='bakcell.html'
    })
    walletBtn.addEventListener('click',function(e){
      
        // let el=e.currentTarget;
         window.location.href='wallet.html'
    })
    
    
    

})

