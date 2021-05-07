export default toDo_btn.addEventListener('click', () => {
    tasks.push(new Task(toDo_input.value));
    localSt();
    createList();
    toDo_input.value = '';
})