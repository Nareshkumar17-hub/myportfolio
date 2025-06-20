let button1 = document.getElementById("btn1") ; 

button1.addEventListener("click" , function () {
   let input_in =  document.getElementById("in_input").value ; 

   let show_income = document.getElementById("in_amt") ;  

   show_income.textContent = input_in ;



  document.getElementById("in_input").value = "" ; 


   localStorage.setItem("income" , show_income.textContent) 

   let income = Number(input_in) ; 

   storage.push(income) ;
 
})  

//transation names 


let button2 = document.getElementById("btn2") ; 

button2.addEventListener("click" , function () {

  let names = document.getElementById("his").value  

  let list = document.getElementById("names") ; 

   if (names.value.trim() === "" || Number(names.value) === 0) {
    alert("Please enter a valid number"); 
    return;
   }
     let li = document.createElement("li") ; 

     li.textContent = names;

     list.appendChild(li) 

  }) 
  //transation amount 
 

  let storage = [] ; 
let button3 = document.getElementById("btn3") ; 

button3.addEventListener("click" , function() {

  let amount = document.getElementById("amount").value ;  


let num_list = document.getElementById("num") ;  

  let amt_li = document.createElement("li") ;   
  

    num_list.appendChild(amt_li) ; 


     amt_li.textContent = amount ; 
      
     document.getElementById("amount").value = "" ; 

    // storage and calculations 
     
     let num = Number(amount) ; 
     storage.push(num)

    let total = storage.reduce((a,b) => a+b , 0) ; 

    let balance = document.getElementById("bal") ; 

    balance.textContent = total ; 
})  