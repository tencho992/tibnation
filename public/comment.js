
// document.querySelector('#commentForm').addEventListener('click', postComment)
//create fetch 
function postComment(){
  console.log('its reached js')
  const name = document.querySelector('#commentName').value
  const comment = document.querySelector('#comment').value
  fetch('/post/createComments', {
    
    method:'post',
   
    body: JSON.stringfy({
      'name': name,
      'comment': comment
    })
    
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
}




