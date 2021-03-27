// type a task into the input field
// click submit button
// string should appear on the DOM after it's been activated

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector('#tasks') 

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTask = document.querySelector("#new-task-description").value

  taskList.innerHTML += `
      <li> ${newTask}
      <button data-action="delete">delete</button>
      </li>
  `
  taskForm.reset();
});

// delete btn
taskList.addEventListener('click', function (e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
});