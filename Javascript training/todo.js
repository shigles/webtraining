var todos = ["feed hogs"];

var input = prompt("What would you like to do?");




while (input !== "quit") {
    //handles input
    if (input === "list") {
        listTodos();
    //prompts for new todo
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //asks again for input
    input = prompt("What would you like to do?");
}

console.log("OK! You quit the App!");


function listTodos(){
    console.log("**********");
    todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodo(){
    var newTodo = prompt("enter a new todo");
    //adds todo to array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    //asks for the index to be deleted
    var index = prompt("Enter the indexof the todo to delete");
    //deletes specified index
    //splice()
    todos.splice(index,1);
    console.log("Deleted Todo");
}