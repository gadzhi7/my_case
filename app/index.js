import './style.scss';

function checked(elem) {
  elem.previousElementSibling.checked == true ? elem.previousElementSibling.checked = false : elem.previousElementSibling.checked = true;
}

// выбор чекбокса
let checkboxLabel = document.querySelectorAll('.checkbox__label')
for(let i = 0; i < checkboxLabel.length; i++) {
  checkboxLabel[i].addEventListener('click', function() {
    checked(this)
  })
}

// выбор радио
let radioLabel = document.querySelectorAll('.radio__label')
for(let i = 0; i < radioLabel.length; i++) {
  radioLabel[i].addEventListener('click', function() {
    checked(this)
  })
}

// JavaScript прогресс
let jsLevel = document.querySelector('.js-level__progressbar')
let jsLevelItems = document.querySelectorAll('.js-level__progressbar p')
  jsLevel.addEventListener('click', function(e) {
    if(e.target.tagName === 'P' && e.target.className !== 'js-level__checked') {
      let _this = e.target
      for(let i = 0; i < jsLevelItems.length; i++) {
        jsLevelItems[i].classList.remove('js-level__checked')
      }
      _this.classList.add('js-level__checked')
    }
})

//  автовысота textarea
let textArea = document.querySelector('.about-me_textarea')
textArea.addEventListener('keyup', function() {
  textAreaAdjust(this)
})
function textAreaAdjust(t = textArea) {
  t.style.height = "1px";
  t.style.height = (t.scrollHeight)+"px";
}

document.addEventListener("DOMContentLoaded", function() {
  textAreaAdjust(textArea)
});

window.onresize = function() {
    textAreaAdjust(textArea)
};
