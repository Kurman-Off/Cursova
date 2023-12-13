'use strict'

 function toggleNested(element) {
      var nestedList = element.querySelector('.nested');
      nestedList.classList.toggle('active');
      document.addEventListener('click', function (event) {
        if (!element.contains(event.target)) {
          nestedList.classList.remove('active');
        }
      });
    }