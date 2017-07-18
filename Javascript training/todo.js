var todos =["feed hogs","do homework", "prep for invasion"];

var input = prompt ("What would you like to do?");

if(input === "list") {
    console.log(todos);
} else if(input === "new") {
    var newTodo = prompt("enter a new todo");
    todos.push(newTodo);
}