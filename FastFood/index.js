'use strict'

  const decrementButton = document.querySelector('.btn__decrease');
  const incrementButton = document.querySelector('.btn__increase');
  const valueInput = document.getElementById('value');
  const navItems = document.querySelector(".nav__items")

  decrementButton.addEventListener('click', decrement);
  incrementButton.addEventListener('click', increment);

  function decrement() {
    if(valueInput.value > 0){
      let currentValue = parseInt(valueInput.value, 10) || 0;
      valueInput.value = currentValue - 1
    }
  }

  function increment() {
    let currentValue = parseInt(valueInput.value, 10) || 0;
    valueInput.value = currentValue + 1;
  }

  // navItems.addEventListener("click", toggleNested)


  // function toggleNested() {
  //   let nestedList = document.querySelector('.nested');

  //   document.addEventListener("click", (evt) =>{
  //     console.log(evt.target)
  //     if(evt.target !== nestedList){
  //       console.log("hello")
  //       nestedList.classList.remove("active")
  //     }
  //   })
  //   nestedList.classList.toggle('active');
  // }

  
    
    
    
