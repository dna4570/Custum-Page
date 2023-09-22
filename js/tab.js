'use strict';
const items = document.querySelectorAll('.item');
const contents = document.querySelectorAll('.content');

items.forEach(function (item,index) {
  item.addEventListener('click', function () {
    items.forEach(function(element){
      if(item !== element) {
        element.classList.remove('active')
      }
    });
    item.classList.add('active');
    contents.forEach(function(content){
      if(contents[index] !== content){
        content.classList.remove('show')
      }
    })
    contents[index].classList.add('show');
  });
});
