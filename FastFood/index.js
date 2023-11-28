'use strict'

document.addEventListener('click', function (event) {
  const targetElement = event.target;

  // Перевіряємо, чи елемент, на який було клікнуто, є кнопкою для зменшення або збільшення
  if (targetElement.classList.contains('btn__decrease')) {
    handleButtonClick(targetElement, -1);
  } else if (targetElement.classList.contains('btn__increase')) {
    handleButtonClick(targetElement, 1);
  }
});

function handleButtonClick(button, step) {
  const container = button.closest('.plus__minus__btn');
  const valueInput = container.querySelector('.value');

  let currentValue = parseInt(valueInput.value, 10) || 0;

  // Забороняємо значенням бути меншими за 0
  if (currentValue + step >= 0) {
    valueInput.value = currentValue + step;
  }
}

function toggleNested(element) {
  var nestedList = element.querySelector('.nested');
  nestedList.classList.toggle('active');
  document.addEventListener('click', function (event) {
    if (!element.contains(event.target)) {
      nestedList.classList.remove('active');
    }
  });
}




  
    
    
    
