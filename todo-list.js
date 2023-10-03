const todoList = [];
renderTodoList();
function renderTodoList() {
    

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    const inputEl = document.querySelector('.inputTodo');
    const name = inputEl.value;
    todoList.push(name);
    console.log(todoList);

    inputEl.value = '';
    renderTodoList();
}