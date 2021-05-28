const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const taskinput = document.querySelector('#task');

loadEventLIsteners();

function loadEventLIsteners() {
  
    form.addEventListener('submit', addTask);

    tasklist.addEventListener('click', remove);
 
    clearbtn.addEventListener('click', clearAllTasks);
    
}
function addTask(e) {
    if(taskInput.value === '') {
      alert('Add a task');
    }

    const li = document.createElement('li');
 
    li.className = 'collection-item';
  
    li.appendChild(document.createTextNode(taskInput.value));
   
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
  

    taskList.appendChild(li);
  
  

    taskInput.value = '';
  
    e.preventDefault();
  }

function remove(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
         if(confirm('Are you sure')) {
        e.target.parentElement.parentElement.remove();
    }
}
}

function clearAllTasks() {
    tasklist.innerHTML = '';
}

