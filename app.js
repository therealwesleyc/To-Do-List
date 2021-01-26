const input = document.querySelector('.todo-list');
const button = document.querySelector('.button1');
const list = document.querySelector('.list');

button.addEventListener("click", addTodo);
list.addEventListener('click', removeItem);

function addTodo(e){ 
    e.preventDefault();
    //console.log("hello");
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const complete = document.createElement('button');
    complete.innerHTML = '<i class ="fas fa-check"></i>';
    complete.classList.add('completebutton');
    todoDiv.appendChild(complete);

    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add('trashbutton');
    todoDiv.appendChild(trash);
    list.appendChild(todoDiv);
    input.value = "";
}

function removeItem(e){
    e.preventDefault();
    const item = e.target;
    if(item.classList[0] === "trashbutton"){
        const removeItem = item.parentElement;
        removeItem.remove();
    }
    if(item.classList[0] === "completebutton"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

