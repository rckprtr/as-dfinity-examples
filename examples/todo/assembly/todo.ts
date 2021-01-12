import { Actor, query, update, API, Principal } from "@cdk-as/cdk"
import { Todo } from "./models";

class TodoActor extends Actor {

    //==============
    //ToDo Examples
    //==============
    todos: Array<Todo>;
    nextId: i64;

    constructor(owner: Principal, time: i64) {
        super(owner, time)
        this.todos = new Array<Todo>();
        this.nextId = 0;
    }


    //@ts-ignore
    @query()
    getTodos(): Array<Todo> {
        return this.todos;
    }

    //@ts-ignore
    @update()
    addTodo(description: string): void {
        var todo = new Todo();
        todo.description = description;
        todo.id = this.nextId++;
        this.todos.push(todo);
    }

    //@ts-ignore
    @update()
    completeTodo(id: i64): void {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].completed = true;
            }
        }
    }

    //@ts-ignore
    @update()
    clearCompleted(): void {
        for (var i = 0; i < this.todos.length; i++) {
            this.todos[i].completed = false;
        }
    }

    @query()
    showTodos(): void {
        API.print("To Dos")
        var finished = "✔";
        for (var i = 0; i < this.todos.length; i++) {
            var todo = this.todos[i];
            API.print(todo.id.toString() + ": " + todo.description + " " + (todo.completed ? finished : ""));
        }
    }
}



export {
    TodoActor
}