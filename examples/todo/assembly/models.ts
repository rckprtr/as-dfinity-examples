import { record } from "@cdk-as/cdk";

//@ts-ignore
@record()
class Todo {
    id: i64;
    description: string;
    completed: bool;

    constructor(){
        this.id = 0;
        this.description = "";
        this.completed = false;
    }
}


export {
    Todo
}