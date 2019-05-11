import './style.scss';

let checkboxLabel = document.querySelectorAll('.checkbox__label')
for(let i = 0; i < checkboxLabel.length; i++) {
  checkboxLabel[i].addEventListener('click', function(e) {
    this.previousElementSibling.checked == true ? this.previousElementSibling.checked = false : this.previousElementSibling.checked = true;
  })
}
