const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");  // document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo (event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("button");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}

toDoFrom.addEventListener("submit", handleToDoSubmit);
