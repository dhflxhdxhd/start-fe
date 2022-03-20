var todos = [];

// function create(todo){
//     todos.push(todo)
// }

// function read(){
//     todos.forEach(function(todo){
//         console.log(todo);
//     });
// }

// function update(updateTodo, newTodo){
//     var updateIndex = todos.findIndex((todo) => {
//         return todo === updateTodo;
//     });

//     todos[updateIndex] = newTodo;
// }


// function del(deleteTodo){
//     todos = todos.filter((todo) => {
//         return todo !==  deleteTodo;
//     }
// );}


// create('game')
// create('music')
// console.log(todos)

// read()

// update('game','food')
// console.log(todos)

// del('music')
// console.log(todos)


var CRUD = {
    create : function create(){
        var n = arguments.length
        if (n>1) {
            for ( var cnt = 0;  cnt < n; cnt++){
                todos.push(arguments[cnt]);
            }
        }else{
            todos.push(arguments[0]);
        }
    },
    read : function read(){
        todos.forEach(function(todo){
            console.log(todo);
        });
    },
    update : function update(updateTodo, newTodo){
        var updateIndex = todos.findIndex((todo) => {
            return todo === updateTodo;
        });
    
        todos[updateIndex] = newTodo;
    },
    delete : function del(deleteTodo){
        todos = todos.filter((todo) => {
            return todo !==  deleteTodo;
        }
    );},
}

CRUD.create('game','music','c','d');
CRUD.create('e')
// CRUD.create('music');
console.log(todos)
CRUD.read();
CRUD.update('game','drama');
console.log(todos)
CRUD.delete('music');
console.log(todos)