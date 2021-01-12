import { Actor, query, update, API } from "@cdk-as/cdk"

class ExampleActor extends Actor {

    //==============
    //Counter Examples
    //==============

    public counter: i32 = 0;

    //@ts-ignore
    @update()
    set(value: i32): void {
        this.counter = value;
    }

    //@ts-ignore
    @update()
    increment(): void {
        this.counter += 1;
    }

    //@ts-ignore
    @update()
    decriment(): void {
        this.counter -= 1;
    }

    //@ts-ignore
    @query()
    get_value(): i32 {
        API.print("Counter Count: " + this.counter.toString());
        return this.counter;
    }

    //==============
    //Echo Examples
    //==============

    //@ts-ignore
    @query()
    echo(value: string): string {
        return value;
    }
}



export {
    ExampleActor
}