var tasks = [];
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
} // if local storage have tasks push it in tasks array
getTasksFromLocalStorage();


document.getElementById('add-task').addEventListener('click', addToList);

function addToList() {
    let taskTitle = document.getElementById('task-title').value;
    if (taskTitle.length > 0) {
        // push value to array
        tasks.push(taskTitle);
        // craete li
        var newLi = document.createElement("li");
        // set class attributes to li
        newLi.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded')
        // create task span title
        var newSpan = document.createElement('span');
        // text form input
        var textSpan = document.createTextNode(taskTitle);
        // append text to span
        newSpan.appendChild(textSpan);
        // append span to li
        newLi.appendChild(newSpan);
        // create div
        var newDiv = document.createElement('div');
        // set class attributes to div
        newDiv.setAttribute('class', 'task-actions');
        // create X button
        var newBtn = document.createElement('button');
        // set onclick attribute to X btn     
        newBtn.setAttribute('onclick', 'removeTask(this)');
        // set class attributes to button
        newBtn.setAttribute('class', 'btn btn-danger ms-1');
        var newBtnText = document.createTextNode("X");
        // append text to button
        newBtn.appendChild(newBtnText);
        // append delete button to div
        newDiv.appendChild(newBtn);
        // append second button to div
        newDiv.appendChild(newBtn);
        // select ul
        var ulList = document.getElementById('task-list');
        // append div to li
        newLi.appendChild(newDiv);
        // append li to ul
        ulList.appendChild(newLi);
        // reset input value
        document.getElementById('task-title').value = "";
        // add tasks array to local storage
        return addTasksToLocalStorage(tasks); 
    } else {
        return alert("can't add empty task");
    }

} // end of add to list function




function removeTask(elem) {
    elem.parentNode.parentNode.remove(); // remove task from page
    let taskValue = elem.parentNode.parentNode.firstChild.innerHTML;
    tasks = tasks.filter(taskTitle => taskValue != taskTitle); // remove task from local storage
    return addTasksToLocalStorage(tasks); // update tasks in local storage

} // end of remove task from list function


function addTasksToLocalStorage(tasks) {
    return localStorage.setItem("tasks", JSON.stringify(tasks));

} // end function add or update tasks in local storage


function getTasksFromLocalStorage() {
    let allTasks = localStorage.getItem("tasks");
    if (allTasks) {
        let tasks = JSON.parse(allTasks);
        return displayTasks(tasks);
    }

} // end function to get tasks from local storage



function displayTasks(tasks) {
    tasks.forEach(task => {
        // craete li
        var newLi = document.createElement("li");
        // set class attributes to li
        newLi.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded')
        // create task span title
        var newSpan = document.createElement('span');
        // text form input
        var textSpan = document.createTextNode(task);
        // append text to span
        newSpan.appendChild(textSpan);
        // append span to li
        newLi.appendChild(newSpan);
        // create div
        var newDiv = document.createElement('div');
        // set class attributes to div
        newDiv.setAttribute('class', 'task-actions');
        // create X button
        var newBtn = document.createElement('button');
        // set onclick attribute to X btn     
        newBtn.setAttribute('onclick', 'removeTask(this)');
        // set class attributes to button
        newBtn.setAttribute('class', 'btn btn-danger ms-1');
        var newBtnText = document.createTextNode("X");
        // append text to button
        newBtn.appendChild(newBtnText);
        // append delete button to div
        newDiv.appendChild(newBtn);
        // select ul
        var ulList = document.getElementById('task-list');
        // append div to li
        newLi.appendChild(newDiv);
        // append li to ul
        return ulList.appendChild(newLi);
    });

} // end display tasks from local storage function 