import { Actor, query, update, API, Principal } from "@cdk-as/cdk"
import { Entry } from "./models";

class PhonebookActor extends Actor {

    //==============
    //Phonebook Examples
    //==============
    phonebookMap: Map<string, Entry>;

    constructor(owner: Principal, time: i64) {
        super(owner, time)
        this.phonebookMap = new Map<string, Entry>();
    }

    //@ts-ignore
    @update()
    insert(name: string, description: string, phone: i64): void {
       var entry = new Entry();
       entry.name = name;
       entry.description = description;
       entry.phone = phone;
       this.phonebookMap.set(name, entry);

    }

    //@ts-ignore
    @query()
    lookup(name: string): Entry | null {
        if(this.phonebookMap.has(name)){
            return this.phonebookMap.get(name);
        }
       return null
    }

}



export {
    PhonebookActor
}