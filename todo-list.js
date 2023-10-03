const todoList = [];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name=todoObject.name;
        //const dueDate=todoObject.dueDate;
        const {name, dueDate}=todoObject;
        
        const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="deleteBtn">Delete</button> 
    `;
    todoListHTML += html;
  }

   
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    const inputEl = document.querySelector('.inputTodo');
    const name = inputEl.value;
    const dateInputEl=document.querySelector('.date-input');
    const dueDate = dateInputEl.value;
    todoList.push({name, dueDate});
   

    inputEl.value = '';
    renderTodoList();
}