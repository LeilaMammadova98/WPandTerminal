'use strict'

let amount = document.querySelector('#amount')
let nomre = document.querySelector('#nomre')
let tarix = document.querySelector('#tarix')
let kod = document.querySelector('#kod')





let balalar = document.querySelectorAll('input');

for (let index = 0; index < balalar.length; index++) {
    let biri = balalar[index];


    biri.addEventListener('keydown', function (e) {

        let allowed = [190,191, 8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        let indexPost = allowed.indexOf(e.keyCode);

        if (indexPost == -1) {
            e.preventDefault();


        }

    }

    )
}

amount.addEventListener('keyup', function (e) {

    let elAmount = e.currentTarget;


  
}

)


nomre.addEventListener('keyup', function (e) {
    let el = e.currentTarget;

    if (el.value.length > 9) {
        let tarix = document.querySelector('#tarix')
        el.blur()
        tarix.focus()
    }

})

var dateField = document.getElementById("tarix");
dateField.onkeyup = bar;
function bar(evt)
{
    var v = this.value;
    if (v.match(/^\d{2}$/) !== null) {
        this.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        this.value = v + '/';
    }

   // let el = e.currentTarget;
        let pattern1 = /^[0-2][0-9].[0-2][0-9].[2][0][0-3][0-9]/g;
        let pattern2 = /^[3][0-1].[0-2][0-9].[2][0][0-3][0-9]/g
        let result1 = pattern1.test(v)
        let result2 = pattern2.test(v)
      
    
        if (v.length >= 10) {
    
            if (result1 == true || result2 == true) {
                let kod = document.querySelector('#kod');
                kod.focus();
                v.blur()
            }
            else {
                alert('Tarix yanlışdır')
            }
        }
    
}

// tarix.addEventListener('keyup', function (e) {
//     let el = e.currentTarget;
//     let pattern1 = /[0-2][0-9]\.[0-2][0-9]\.[2][0][0-3][0-9]/g;
//     let pattern2 = /^[3][0-1]\.[0-2][0-9]\.[2][0][0-3][0-9]/g
//     let result1 = pattern1.test(el.value)
//     let result2 = pattern2.test(el.value)
  

//     if (el.value.length >= 10) {

//         if (result1 == true || result2 == true) {
//             let kod = document.querySelector('#kod');
//             kod.focus();
//             el.blur()
//         }
//         else {
//             alert('Tarix yanlışdır')
//         }
//     }



// })

kod.addEventListener('keyup', function (e) {
    let el = e.currentTarget;

    if (el.value.length >= 4) {

        el.blur()

    }

})

let form = document.querySelector('#form')


form.addEventListener('submit', function (e) {

 

    let amount=Number(document.querySelector('#amount').value);
    let b=localStorage.getItem('amount');

     let balans = Number(b);
 
    localStorage.setItem('amount',amount+balans);
    console.log(balans);
        
    window.location.href ='main.html';
 e.preventDefault()

})

