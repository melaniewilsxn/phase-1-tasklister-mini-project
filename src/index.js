document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target)
    form.reset()
  })
  // let sortBtn = document.getElementById('sort')
  // sortBtn.addEventListener('click', (e) => {
  //   sortTaskList(e)
  //   //form.reset()
  // })
});

// Adds items to to do list
function createToDo(toDo){
  let newToDo = toDo.new_task_description.value
  let newPriority = toDo.new_task_priority.value
  let newDueDate = toDo.due_date.value
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  li.textContent = `${newToDo} by ${newDueDate} `
  if (newPriority === "highPriority") {
      li.setAttribute("class", "highPriority")
  } else if (newPriority === "mediumPriority") {
      li.setAttribute("class", "mediumPriority")
  } else li.setAttribute("class", "lowPriority")
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

// Deletes items from to do list
function handleDelete(e){
  e.target.parentNode.remove()
}

// function sortTaskList(e){
//   console.log(document.querySelector('li'))
// }