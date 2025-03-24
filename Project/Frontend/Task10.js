let taskStack = [];

function addTask() {
    const task = document.getElementById("task_input").value.trim();
    if (task) {
        taskStack.push(task);
        displayTasks();
    }
}

function undoTask() {
    taskStack.pop();
    displayTasks();
}

function displayTasks() {
    document.getElementById("task_list").innerText = taskStack.toString().split(",").join("\n");
}

function printSide() {
    
    return result
}

function printStars() {
    let anyreturnValue = "";
    for(let i = 1; i <= 5; i++) {
        let result = "";
        for(let j = 1; j <= 5; j++) {
            result += "*"
        }
        anyreturnValue += result + "<br/>";
    }
    return anyreturnValue
}

console.log(printStars())