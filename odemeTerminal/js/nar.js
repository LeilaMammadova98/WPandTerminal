
'use strict'
let amount = document.querySelector('#amount')

let nomre = document.querySelector('#nomre')





let balalar = document.querySelectorAll('input');

for (let index = 0; index < balalar.length; index++) {
    let biri = balalar[index];


    biri.addEventListener('keydown', function (e) {

        let allowed = [190, 8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        let indexPost = allowed.indexOf(e.keyCode);

        if (indexPost == -1) {
            e.preventDefault();


        }

    }

    )
}


nomre.addEventListener('keyup', function (e) {
    let el = e.currentTarget;

 //   let amount = document.querySelector('#amountAz')
    if (el.value.length > 9) {
        el.blur()
        amount.focus()
    }

})


let form = document.querySelector('#form1')



form.addEventListener('submit',function(e){
    e.preventDefault()
    let amount=Number(document.querySelector('#amount').value)
let balance=Number(localStorage.getItem('amount'))
if(balance<amount){
alert('Balansınızı artırın')

window.location.href="main.html"
return
}
localStorage.setItem('amount',balance-amount)


window.location.href="main.html"
    
    
    console.log(amount)
    
})