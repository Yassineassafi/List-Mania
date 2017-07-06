//Global Variable
var taskList = [];

//Display Dynamic HTML Lists
//UL & LI Tags
//Remove Button Displays
function displayList()
{
    
    //Variable for creating & storing dynamic HTML Elements
    var taskListContent = "<ul>";

    //Create LI Tags and Loop through the Array
    for(var i=0; i < taskList.length; i++)
    {
        taskListContent += "<li>"+taskList[i]+"<button class='remove' id='"+i+"'>Remove</button></li>";
    }
    taskListContent += "</ul>";
    //Replace the HTML Elements inside of the id="TaskListValue"
    document.getElementById("TaskListValue").innerHTML = taskListContent;

    var btnArray = document.getElementsByClassName("remove");
    for(i =0; i < btnArray.length; i++)
    {
        btnArray[i].addEventListener('click', removeTask);
    }


}

//Add in the Tasks from the input field in our HTML File
function addTask() 
{
    //Create a Variable to hold the Input Value
    var task = document.getElementById("inputValue").value;
    //Clear off the Input Value after saving it in the task variable
    document.getElementById("inputValue").value = "";
    //Add the task into our Array
    taskList.push(task);
    
    //Display the latest list of tasks
    displayList();
}
function removeTask()
{
    //Remove Tasks from the Array
    var rID = this.getAttribute("id");
    taskList.splice(rID, 1);     
    displayList();              

}























displayList();
document.getElementById("Add").addEventListener("click", addTask);