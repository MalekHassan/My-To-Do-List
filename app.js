'use strict'
var urg = ['High', 'Medium', 'Low'];
var tableHeader = ['Task', 'Date', 'Urgency']
var allTasks = [];
console.log(allTasks);
function Tasks(taskInfo, date, urgency) {
    this.taskInfo = taskInfo
    this.date = date
    this.urgency = urgency
    allTasks.push(this);
}
var form = document.getElementById('ToDoForm');
form.addEventListener('submit', function () {
    event.preventDefault();
    var task = event.target.TaskInfo.value;
    // console.log(task);
    var date = event.target.TaskDate.value;
    // console.log(date);
    var urgency = event.target.Urgency.value;
    var UrgencyValue = urg[urgency];
    // console.log(UrgencyValue);
    var mytask = new Tasks(task, date, UrgencyValue);
    if (allTasks.length > 1) {
        var myDelete = document.getElementById('Table')
        myDelete.remove();
    }
    render();
})

function render() {
    var main = document.getElementById('main');
    var table = document.createElement('table');
    table.setAttribute('id', 'Table')
    main.appendChild(table);
    var hr = document.createElement('hr')
    table.appendChild(hr);
    for (var x = 0; x < tableHeader.length; x++) {
        var headerData = document.createElement('td');
        headerData.textContent = tableHeader[x];
        hr.appendChild(headerData);
    }

    for (var y = 0; y < allTasks.length; y++) {
        var DataRow = document.createElement('tr');
        table.appendChild(DataRow);
        var taskInfo = document.createElement('td');
        taskInfo.textContent = allTasks[y].taskInfo;
        DataRow.appendChild(taskInfo);
        var tasksDate = document.createElement('td');
        tasksDate.textContent = allTasks[y].date;
        DataRow.appendChild(tasksDate);
        var type = document.createElement('td');
        type.textContent = allTasks[y].urgency;
        DataRow.appendChild(type);
    }

}
var clearButton = document.getElementById('Table')
var button = document.createElement('button')
clearButton.appendChild(button)
button.setAttribute('id', 'ClearData')
button.textContent = 'Clear All Data'
button.setAttribute('type', 'button')
button.setAttribute('onclick', 'clearFunction()')
button.addEventListener('ClearData', clearFunction())
function clearFunction() {
    var ClearData = document.getElementById('Table')
    ClearData.remove();
}