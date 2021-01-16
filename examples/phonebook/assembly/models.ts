import { record } from "@cdk-as/cdk";

//@ts-ignore
@record()
class Entry {
    name: string;
    description: string;
    phone: i64;

    constructor(){
        this.name = "";
        this.description = "";
        this.phone = 0;
    }
}


export {
    Entry
}