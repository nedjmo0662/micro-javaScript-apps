const tasks = document.querySelector('.tasks');
const input = document.querySelector('.input-container input');
const empty = document.getElementById('empty');

input.addEventListener('keypress',addTask);
document.addEventListener('DOMContentLoaded',getItems);
tasks.addEventListener('click',removetask);
tasks.addEventListener('click' ,check);

function indexof(arr,str) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == str) {
            return i;
        }
    }
}
function check(e) {
    let tasksItems =  JSON.parse(localStorage.getItem('tasks'));
    let tar =  e.target;
    tar.classList.add('complete');
    if(tar.id === 'item'){
        let index = indexof(tasksItems,tar.innerText);
        tasksItems[index] = `0${tasksItems[index]}`;
        localStorage.setItem('tasks',JSON.stringify(tasksItems)) ;
    }
}

function addTask(e) {
    if(e.key == 'Enter' && input.value !== ''){
        empty.classList.add('hide');
         tasks.innerHTML += `<div class="task-item">
        <li  id ="item">  ${input.value} 
        <button class="del-btn"><i class="far fa-trash-alt"></i></button>
        </li>
        </div>`;

        saveLocalTasks(input.value);
        // tasks.innerHTML += `<li>  ${input.value} '</li>`
        // const li = document.createElement('li');
        // li.classList.add('')
        input.value = '';
    }
}
function saveLocalTasks(task) {
    let tasksItems;
    if(localStorage.getItem("tasks") === null){
        tasksItems = [];
    }else {
        tasksItems = JSON.parse(localStorage.getItem('tasks'));
    }
    tasksItems.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasksItems));
}
function getItems() {
    
    let tasksItems ;
    if(localStorage.getItem("tasks").length === 2){
        empty.classList.remove('hide');
        tasksItems = [];
    }else {
        tasksItems = JSON.parse(localStorage.getItem("tasks"));
        empty.classList.add('hide');
    }

    tasksItems.forEach(task => {
        if(task[0] == '0'){
            //removing the 0 from the front 
            task = task.substr(1);
            //==

            tasks.innerHTML += `<div class="task-item">
            <li id ="item" class="complete">  ${task} 
            <button class="del-btn"><i class="far fa-trash-alt"></i></button>
            </li>
            </div>`
        }else{
            tasks.innerHTML += `<div class="task-item">
            <li id ="item">  ${task} 
            <button class="del-btn"><i class="far fa-trash-alt"></i></button>
            </li>
            </div>`
        }
    });
}
let dir = 0;
function removetask(e) {
    const item = e.target;
    if(item.classList[0] === 'del-btn'){
        const task = item.parentElement.parentElement;
        if(dir == 0){
            task.classList.add('left');
            dir = 1;
        }else {
            task.classList.add('right');
            dir =0;
        }
        removeLocalTask(task);
        task.addEventListener('transitionend',function(){
            task.remove()
    });
    }
    
    // console.log(task);
}

function removeLocalTask(task) {
    let tasksItems;
    if(localStorage.getItem('tasks').length == 2){
        tasksItems = [];
        console.log('don');
        getItems();
    }else{
        tasksItems = JSON.parse(localStorage.getItem('tasks'));
    }
    const index = tasksItems.indexOf(task.children[0].innerText);
    tasksItems.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasksItems));
    
}



