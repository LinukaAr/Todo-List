const todoList = [{name:'',dueDate:''}];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name=todoObject.name;
        //const dueDate=todoObject.dueDate;
        const {name, dueDate}=todoObject;
        
        const html = `
        <p>
        ${name} ${dueDate} 
        <button onclick="todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button>
        </p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    const inputEl = document.querySelector('.inputTodo');
    const name = inputEl.value;
    const dateInputEl=document.querySelector('.date-input');
    const dueDate = dateInputEl.value;
    todoList.push({name, dueDate});
    console.log(todoList);

    inputEl.value = '';
    renderTodoList();
}