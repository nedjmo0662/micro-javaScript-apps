//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//listener
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterTodo);

//functions
function addTodo(e){
    e.preventDefault();
    //creat div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creat list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    //save on locale storage;

    saveLocalTodos(todoInput.value);

    todoDiv.appendChild(newTodo);
    todoInput.value= "";
    //creat button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class ="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
        //creat button 
        const trashbutton = document.createElement("button");
        trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashbutton.classList.add("trash-btn");
        todoDiv.appendChild(trashbutton);
        //attach final todo
        todoList.appendChild(todoDiv);
}

function deletecheck (e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        //removing
        
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove()
    });
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted" : 
            if(todo.classList.contains("completed")){
                todo.style.display = 'none';
            }
            else{
                todo.style.display = 'flex';
            }
            
        }
    });
}

function saveLocalTodos (todo) {
    //check if i have it allready
    let todos ;
    if(localStorage.getItem("todos") ===null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function getTodos(e) {
        //check if i have it allready
        let todos ;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem("todos"))
        }

        todos.forEach(function(todo){
            //creat div
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            //creat list
            const newTodo = document.createElement("li");
            newTodo.innerText = todo;
            newTodo.classList.add("todo-item");
            todoDiv.appendChild(newTodo);
            //creat button 
            const completedButton = document.createElement("button");
            completedButton.innerHTML = `<i class ="fas fa-check"></i>`;
            completedButton.classList.add("complete-btn");
            todoDiv.appendChild(completedButton);
                //creat button 
                const trashbutton = document.createElement("button");
                trashbutton.innerHTML = `<i class="fas fa-trash"></i>`;
                trashbutton.classList.add("trash-btn");
                todoDiv.appendChild(trashbutton);
                //attach final todo
                todoList.appendChild(todoDiv)
        });
}

function removeLocalTodos(todo) {
            //check if i have it allready
            let todos ;
            if(localStorage.getItem("todos") === null){
                todos = [];
            }else {
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            
    const todoIndex =todos.indexOf(todo.children[0].innerText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}