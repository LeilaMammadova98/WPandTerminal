

$(document).ready(function () {







  function toObject(valueArray){
    let obj={};
  
  for (const item of valueArray) {
    obj[item.name]=item.value
  }
  return obj
  }
  $('#form').submit(function(e){
    e.preventDefault();
    let data=$(e.currentTarget).serializeArray();
    let any=toObject(data)
    let bulk=JSON.stringify(any)
    let a=localStorage.getItem('data');
    let c;
if(a!=null){
     c=bulk+'$'+a
  }
    else{
c=bulk;
    }
    localStorage.setItem('data',c)
  
  //  console.log(any)
  window.location.href="contacts.html"
  })
  
  
  
  
  
  $("#sel").change(function (e) { 
    e.preventDefault();
    let el=e.currentTarget;
    console.log(el.value)
   
  document.querySelector('#numberCode').textContent=el.value
  
  
  
  
  });
  
   
  
  $('#save').prop('disabled',true)
  $('#numberCodes').keyup(function (e) { 
    e.preventDefault()
   let el=e.currentTarget;
   
 let val=e.currentTarget.value;
 function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

numberWithSpaces(val)
 
   if(el.value.length>0){
     $('#save').prop('disabled',false)
     $('#save').addClass("active");
   
   }
   else{
    $('#save').prop('disabled',true)
    $('#save').removeClass("active");
   }
  
  })
  
  })





























// $(document).ready(function () {


//   function toObject(valueArray){
//     let obj={};
  
//   for (const item of valueArray) {
//     obj[item.name]=item.value
//   }
//   return obj
//   }
//   $('#form').submit(function(e){
//     e.preventDefault();
//     let data=$(e.currentTarget).serializeArray();
//     let any=toObject(data)
//     let bulk=JSON.stringify(any)
//     let a=localStorage.getItem('data');

//     let c=bulk+'$'+a
//     localStorage.setItem('data',c)
  
//   //  console.log(any)
//   window.location.href="contacts.html"
//   })
  
  
  
  
  
//   $("#sel").change(function (e) { 
//     e.preventDefault();
//     let el=e.currentTarget;
//     console.log(el.value)
   
//   document.querySelector('#numberCode').textContent=el.value
  
  
  
  
//   });
  
   
  
//   $('#save').prop('disabled',true)
//   $('#numberCodes').keyup(function (e) { 
//     e.preventDefault()
//    let el=e.currentTarget;
  
//    if(el.value.length>0){
//      $('#save').prop('disabled',false)
//      $('#save').addClass("active");
   
//    }
//    else{
//     $('#save').prop('disabled',true)
//     $('#save').removeClass("active");
//    }
  
//   })
  
//   })
































