const toDo_input = document.getElementById('basket_input');
const toDo_btn = document.getElementById('btn_basket');
const toDo_list = document.querySelector('.toDo');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let toDoItemElems = [];

function Task(description) {
     this.description = description;
     this.completed = false;
}

const createTemplate = (task, index) => {
    return `
    <div class="toDo_item ${task.completed ? 'checked' : ''}">
        <div class="description">${task.description}</div>
        <div class="btns">
            <input onclick = "checkBox(${index})" type="checkbox" name="" class="btn_complite" ${task.completed ? 'checked' : ''}>
            <button onclick = "deleteTask(${index})" class="btn-delete">Delete</button>
        </div>
    </div>
    `
}

const createList = () => {
    toDo_list.innerHTML = '';
    if(tasks.length > 0) {
        tasks.forEach( (item, index) => {
            toDo_list.innerHTML += createTemplate(item, index);
        });
        toDoItemElems = document.querySelectorAll('.toDo_item')
    }
}

createList();

const localSt = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const checkBox = (index) => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        toDoItemElems[index].classList.add('checked');
    }else {
        toDoItemElems[index].classList.remove('checked');
    }
    
    localSt();
    createList();
};

const deleteTask = index => {
    tasks.splice(index, 1);
    localSt();
    createList();
}

toDo_btn.addEventListener('click', () => {
    tasks.push(new Task(toDo_input.value));
    localSt();
    createList();
    toDo_input.value = '';
})




