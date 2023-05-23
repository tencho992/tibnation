
function addPoints(){
  fetch('/post/points/add')
    window.location.href='/completeGame'
  
}
function addQuizPoints(){
  fetch('/post/points/addQuiz')
    window.location.href='/completeQuiz'
  
}
let userNameInput = document.querySelector('#userNameInput')
let emailInput = document.querySelector('#emailInput')
document.querySelector('#updateBtn1').addEventListener('click', updateUser)
// document.querySelector('#updateBtn2').addEventListener('click', updateEmail)

function showInputs(input){
    document.querySelector('#updateBtn1').hidden = false;
    userNameInput.hidden = false
}
function showInputs2(input){
  document.querySelector('#updateBtn2').hidden = false;
  emailInput.hidden = false
}
