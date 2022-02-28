document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', newTask)
  });

const newTask = function(event){
  event.preventDefault()
  let input = event.target.description.value
  appendTask(input)
  event.target.description.value = ' '
}

const appendTask = function(input){
  // selectors, elements, variables
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li')
  let deleteBtn = document.createElement('button')
  
  // assign values
  li.textContent = `${input} `
  deleteBtn.innerText = 'X'

  // appending to DOM 
  li.append(deleteBtn)
  ul.appendChild(li)
}