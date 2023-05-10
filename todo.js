let app = document.querySelector('.app');
console.log(localStorage.getItem('todos'))
let todoNone = [];
if(localStorage.getItem('todos') == null) localStorage.setItem('todos', JSON.stringify(todoNone));
let todoList = JSON.parse(localStorage.getItem('todos'));


let todoErrorMessage = document.createElement('div');
todoErrorMessage.textContent = 'Il manque le champs text !';
todoErrorMessage.style.display = 'none';
app.appendChild(todoErrorMessage);

let todoTextInput = document.createElement('input');
todoTextInput.type = 'text';
todoTextInput.placeholder = 'Todo';
todoTextInput.classList.add('textInput');
app.appendChild(todoTextInput);

let todoSubmitInput = document.createElement('input');
todoSubmitInput.type = 'submit';
todoSubmitInput.value = 'Submit';
todoSubmitInput.classList.add('submitInput');
app.appendChild(todoSubmitInput);

let todoClearInput = document.createElement('button');
todoClearInput.innerText = "Clear";
app.appendChild(todoClearInput);

let todoListTable = document.createElement('table');
app.appendChild(todoListTable);

const clearTodos = () => {
    localStorage.clear();
}

for(let i = 0; i < todoList.length; i++) {

    let tr = document.createElement('tr');
    todoListTable.appendChild(tr);
    
    let tdType = document.createElement('td');
    tdType.textContent = todoList[i].type
    tr.appendChild(tdType);

    let tdName = document.createElement('td');
    tdName.textContent = todoList[i].name
    tr.appendChild(tdName);

}

const submitTodo = (event) => {

    event.preventDefault();

    if(todoTextInput.value != "") {
        todoErrorMessage.style.display = 'none';
        console.log(todoTextInput.value);
        todoList.push(
            {
                type: 'Basic',
                name: todoTextInput.value
            }
        );

        let trNew = document.createElement('tr');
        todoListTable.appendChild(trNew);

        let tdNewType = document.createElement('td');
        tdNewType.textContent = todoList[todoList.length -1].type
        trNew.appendChild(tdNewType);

        let tdNewName = document.createElement('td');
        tdNewName.textContent = todoList[todoList.length -1].name
        trNew.appendChild(tdNewName);
        localStorage.setItem('todos', JSON.stringify(todoList));
        todoTextInput.value = '';
    } else {
        todoErrorMessage.style.display = 'block';
    }

}

todoClearInput.addEventListener('click', clearTodos);

todoSubmitInput.addEventListener('click', submitTodo);

