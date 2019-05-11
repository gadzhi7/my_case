import './style.scss';

let checkboxLabel = document.querySelectorAll('.checkbox__label')
for(let i = 0; i < checkboxLabel.length; i++) {
  checkboxLabel[i].addEventListener('click', function() {
    checked(this)
  })
}

let radioLabel = document.querySelectorAll('.radio__label')
for(let i = 0; i < radioLabel.length; i++) {
  radioLabel[i].addEventListener('click', function() {
    checked(this)
  })
}

function checked(elem) {
  elem.previousElementSibling.checked == true ? elem.previousElementSibling.checked = false : elem.previousElementSibling.checked = true;
}

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
