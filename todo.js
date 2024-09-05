let todoList = [
  {
    item:'Milk',
    duedate:'05/09/2024'
  },
  {
    item:'Go to college',
    duedate:'05/09/2024'
  },
  {
    item:'Class',
    duedate:'05/09/2024'
  }
];
displayItem();
function addTodo() {
  let inputElement = document.querySelector("#input-todo");
  let dateElement = document.querySelector("#input-date");
  let itemTodo = inputElement.value;
  let dateTodo = dateElement.value;
  todoList.push({item:itemTodo , duedate:dateTodo});
  inputElement.value = "";
  dateElement.value = "";
  displayItem();
}
function displayItem() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) { 
    let {item, duedate}=todoList[i];
    newHtml += ` 
      <span> ${item} </span>
      <span> ${duedate} </span>
      <button class="btn-delete" onclick="todoList.splice(${i} , 1);
      displayItem();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
