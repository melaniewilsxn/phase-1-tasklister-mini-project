document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target)
    form.reset()
  })

  let sortPriority = document.getElementById('sortPriority')
  sortPriority.addEventListener('click', (e) => {
    sortTaskListPriority(e)
  })

  let sortDueDate = document.getElementById('sortDueDate')
  sortDueDate.addEventListener('click', (e) => {
    sortTaskListDueDate(e)
  })
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
  li.textContent = `${newDueDate} - ${newToDo} `
  if (newPriority === "highPriority") {
      li.setAttribute("class", "aPriority")
  } else if (newPriority === "mediumPriority") {
      li.setAttribute("class", "bPriority")
  } else li.setAttribute("class", "cPriority")
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

// Deletes items from to do list
function handleDelete(e){
  e.target.parentNode.remove()
}

function sortTaskListPriority(e){
  let unorderedTaskList = document.getElementById('tasks')
  const taskList = Array.from(unorderedTaskList.querySelectorAll('li'))
  taskList.sort(function(a, b) {
    return a.className.localeCompare(b.className);
  });
  for (let i = 0; i < taskList.length; i++) {
    unorderedTaskList.appendChild(taskList[i]);
  }
}

function sortTaskListDueDate(e){
  let unorderedTaskList = document.getElementById('tasks')
  const taskList = Array.from(unorderedTaskList.querySelectorAll('li'))
  taskList.sort(function(a, b) {
    return a.textContent.localeCompare(b.textContent);
  });
  for (let i = 0; i < taskList.length; i++) {
    unorderedTaskList.appendChild(taskList[i]);
  }
}