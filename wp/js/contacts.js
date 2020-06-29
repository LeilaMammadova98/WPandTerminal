// $(document).ready(function () {


//     let a = localStorage.getItem('data').split('$')
//     let arr = []
//     for (let index = 0; index < a.length; index++) {

//         let v = a[index];
//         let c = JSON.parse(v)
//         arr.push(c)
//     }
//    // console.log(arr)
//     arr.forEach(function (el) {
//         let g = el.firstName
//         let h = String(el.numberCode)
//         let f = String(el.selection)
    
// let esasList=document.querySelectorAll('.esas')


// console.log(esasList)






//    $('.list').prepend('<li class="d-flex elave user flex-row mt-3"></li>')

   
//         $('.list .elave:first-child').append('<div class="left"></div>')
        
//          $('.list .elave:first-child').append('<div class="right ml-3"></div>')
          
//          $('.list .elave:first-child .left').append('<div class="image"></div>')
          
//         $('.list .elave:first-child .left .image').append('<img src="image/testavatar.png" alt="">')
        
        
//          $('.list .elave:first-child .right').append('<h6></h6>')
        
         
//           $('.list .elave:first-child .right').append('<span></span>')
        
//           $('.list .elave:first-child .right h6').text(g)
        
//          $('.list .elave:first-child .right span').text(f + h)

//     }
//     )


// }
// )





$(document).ready(function () {


    let a = localStorage.getItem('data').split('$')
    let arr = []
    for (let index = 0; index < a.length; index++) {

        let v = a[index];
        let c = JSON.parse(v)
        arr.push(c)

        
let z=document.querySelectorAll('.esas')
$((z[z.length-1])).remove();
// console.log(z[0])
//  z[1].classList.remove('mt-5');
    }
   // console.log(arr)
    arr.forEach(function (el) {
        let g = el.firstName
        let h = String(el.numberCode)
        let f = String(el.selection)
    






   $('.list').prepend('<li class="d-flex elave user flex-row mt-3"></li>')

   
        $('.list .elave:first-child').append('<div class="left"></div>')
        
         $('.list .elave:first-child').append('<div class="right ml-3"></div>')
          
         $('.list .elave:first-child .left').append('<div class="image"></div>')
          
        $('.list .elave:first-child .left .image').append('<img src="image/testavatar.png" alt="">')
        
        
         $('.list .elave:first-child .right').append('<h6></h6>')
        
         
          $('.list .elave:first-child .right').append('<span></span>')
        
          $('.list .elave:first-child .right h6').text(g)
        
         $('.list .elave:first-child .right span').text(f + h)

    }


    )



// let z=document.querySelectorAll('.esas')
// $((z[z.length-1])).remove();


}
)

