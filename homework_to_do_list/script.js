document.addEventListener('DOMContentLoaded', () => {

    let todo = [];
    let progress = [];
    let done = [];
    
    document.getElementById('taskCreator').addEventListener('submit', (e) => {
        e.preventDefault();
        input = document.getElementById('inputTask').value;
        todo.push(input);
        updateLists();
    });
    
    function updateLists() {
        const containerTodo = document.getElementById('itemTodo');
        const containerProgress = document.getElementById('itemProgress');
        const containerDone = document.getElementById('itemDone');
        containerTodo.innerHTML = '';
        containerProgress.innerHTML = '';
        containerDone.innerHTML = ''; 
    
        todo.forEach(function (element, index) {
            let tag = document.createElement('p');
            tag.innerHTML = element + ' <span class="nextStepProcess">In Process</span>';
            containerTodo.appendChild(tag);
    
            let span = tag.querySelector('.nextStepProcess');
            span.addEventListener('click', function () {
                progress.push(todo[index]);
                todo.splice(index, 1);
                updateLists();
            });
        });
    
        progress.forEach(function (element, index) {
            let tag = document.createElement('p');
            tag.innerHTML = element + ' <span class="nextStepDone">Done</span>';
            containerProgress.appendChild(tag);
    
            let span = tag.querySelector('.nextStepDone');
            span.addEventListener('click', function () {
                done.push(progress[index]);
                progress.splice(index, 1);
                updateLists();
            });
        });

            done.forEach(function (element, index) {
            let tag = document.createElement('p');
            tag.innerHTML = element + ' <span class="delete">Done</span>';
            containerDone.appendChild(tag);
    
            let span = tag.querySelector('.delete');
            span.addEventListener('click', function () {
                done.splice(index, 1);
                updateLists();
            });
        });
    }
});
